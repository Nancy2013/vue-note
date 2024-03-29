/**
 * 文件下载
 * @param url 链接
 * @param fileName 名称 
 * @param fileType 类型
 */
export const downloadFile = (url: string, fileName: string,fileType?:BlobPropertyBag) => {
    if (!url) {
      message.error("URL不能为空");
      return;
    }
    axios(
      {
        method: "get",
        url,
        responseType: "blob",
        onDownloadProgress: (evt) => {
          // 对原生进度事件的处理
          const progress=parseInt((evt.loaded / evt.total) * 100)
          console.log('----onDownloadProgress----',progress);
        }
      }
    ).then((res: any) => {
        if (res && res.status === 200) {
          // axios解决下载跨域文件
          const blob = new Blob([res.data],fileType);
          const a = document.createElement("a"); //创建a标签
          a.href = window.URL.createObjectURL(blob);
          a.download = fileName;
          a.style.display = "none";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(a.href);
        }else{
          message.error("下载失败！");
        }
      })
      .catch((e) => {
        console.error(e);
        message.error("下载失败！");
      });
  };