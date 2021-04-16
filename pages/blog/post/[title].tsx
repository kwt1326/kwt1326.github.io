import React, { useEffect } from 'react';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Viewer from '../../../components/Viewer';
import { serverBaseUrl } from '../../../config';
import './post.module.scss';

const Post = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { title } = ctx.query;

  const result = await axios({
    method: 'GET',
    url: `${serverBaseUrl}/api/post`,
    data: { title }
  });
  
  return {
    props: {
      content: result.status === 200 ? result.data.content : '',
    }
  }
}

export default Post;