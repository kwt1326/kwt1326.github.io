'use client'

const UtterancComponent = () => (
  <section
    style={{ width: "100%" }}
    ref={(el) => {
      if (!el) return;
      const scriptElement = document.createElement("script");
      scriptElement.setAttribute("src", "https://utteranc.es/client.js");
      scriptElement.setAttribute("repo", "kwt1326/kwt1326.github.io");
      scriptElement.setAttribute("async", "true");
      scriptElement.setAttribute("label", "blog");
      scriptElement.setAttribute("theme", "github-dark");
      scriptElement.setAttribute("issue-term", "pathname");
      scriptElement.setAttribute("crossorigin", "anonymous");
      el.replaceChildren(scriptElement);
    }}
  />
);

export default UtterancComponent;
