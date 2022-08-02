export const inputTypeChanger = (element: string) => {
    const queriedEl = document.querySelector(element)
    if (queriedEl?.getAttribute('type') === 'text')
    {
        return queriedEl?.setAttribute("type", "date")
    } else {
        return queriedEl?.setAttribute("type", "text")
    }
}