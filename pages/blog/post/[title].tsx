import React, { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { promises as fs } from 'fs'
import path from 'path'
import Viewer from '../../../components/Viewer';
import './post.module.scss';

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const title = ctx?.params ? ctx.params?.title : 'default';
    console.log(`/content/${title}.md`)
    const content = await fs.readFile(path.join(process.cwd(), `/content/${title}.md`), { encoding: 'utf-8' });
    return { props: { content } }
  } catch (error) {
    console.log(error);
  }

  return {
    props: { content: '' }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const pathList = await fs.readFile(path.join(process.cwd(), 'staticPath.txt'), { encoding: 'utf-8' });
    const paths = pathList.split('\n').map((text) => { return { params: { title: text } } });
    console.log(paths)
    return { paths, fallback: false }
  } catch (error) {
    console.log(error);
  }

  return { paths: [], fallback: false }
}

const Post = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  useEffect(() => {
    /**
      *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
      *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
      /*
      var disqus_config = function () {
      this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable  
      this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };

      <script id="dsq-count-scr" src="//kwt-gh-blog.disqus.com/count.js" async></script>
    */   

    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://kwt-gh-blog.disqus.com/embed.js';
      // @ts-ignore
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();  

    (function () { 
      var d = document, s = d.createElement('script');
      s.id = "dsq-count-scr"
      s.src = "//kwt-gh-blog.disqus.com/count.js";
      s.async = true;
      (d.body).appendChild(s);
    })();  
  })  

  return (
    <section>
      <Viewer
        initialValue={props.content}
      />
      <div id="disqus_thread"></div>
      <a href="http://foo.com/bar.html#disqus_thread">Link</a>
    </section>    
  )
}  

export default Post;