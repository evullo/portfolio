export const focusAndBlur = (id: string, duration: number = 1000) => {
    const el = document.getElementById(id)

    if(el) {
        el.focus()

        setTimeout(() => {
            el.blur()
        }, duration)
    }
}