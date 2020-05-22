import "typeface-merriweather";
import "typeface-montserrat";
import "./src/styles/global.css";

// https://github.com/gatsbyjs/gatsby/issues/12964#issuecomment-486740706
// https://www.gatsbyjs.org/docs/add-offline-support-with-a-service-worker/#displaying-a-message-when-a-service-worker-updates

export const onServiceWorkerUpdateReady = () => {
  if (window.location.pathname === "/") {
    window.location.reload();
  }
};
