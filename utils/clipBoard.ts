export default async function copy(val: string) {
  let t = document.createElement('textarea')
  document.body.appendChild(t)
  t.value = val
  t.select()
  document.execCommand('copy')
  document.body.removeChild(t)
  alert('메일 주소가 복사되었습니다.')
}