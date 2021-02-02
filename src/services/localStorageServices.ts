export const counterSetValues = (value: any) => {
    localStorage.setItem('counter value', JSON.stringify(value))
}

export const counterGetValues = () => {
    const data = localStorage.getItem('counter value')
    if(data) {
        return JSON.parse(data)
    }
    return ''
}

