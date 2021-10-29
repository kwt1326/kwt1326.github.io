export default function paging(target: any[], page: number, perCount: number) {
  if (Array.isArray(target)) {
    const sortedList = target?.sort((a, b) => +new Date(b?.created_at) > +new Date(a?.created_at) ? 1 : -1)

    if (perCount > 0) {
      const max = page * perCount;
      const min = (page - 1) * perCount;
    
      return sortedList.filter((_item, i) => {
        if (min <= i && i < max) {
          return true;
        }
        return false
      })
    } else {
      return sortedList;
    }
  }
  return [];
}