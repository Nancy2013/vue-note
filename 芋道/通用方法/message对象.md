# message对象

## 说明

对ant-design-vue message、notification、Modal组件的封装，对外暴露不同的组件方法

## 示例
```js
// Modal确认弹窗
function createConfirm(options: ModalOptionsEx) {
  const iconType = options.iconType || 'warning'
  Reflect.deleteProperty(options, 'iconType')
  const opt: ModalFuncProps = {
    centered: true,
    icon: getIcon(iconType),
    ...options,
    content: renderContent(options),
  }
  return Modal.confirm(opt)
}

// 暴露的方法
export function useMessage() {
  return {
    createMessage: Message,
    notification: notification as NotifyApi,
    createConfirm,
    createSuccessModal,
    createErrorModal,
    createInfoModal,
    createWarningModal,
  }
}
```