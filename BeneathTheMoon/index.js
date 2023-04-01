document.addEventListener('DOMContentLoaded', () => {
    const addEle = (className, parent) => {
        const ele = document.createElement('div');
        ele.classList = className;
        (parent || document.body).appendChild(ele);
        return ele;
    }

    for(var i = 0; i < 200; i++) {
        addEle('star')
    }
    const mooncenter = addEle('mooncenter')

    for(var i = 0; i < 8; i++) {
        addEle('moonshade', mooncenter)
    }
    
    addEle('moon', mooncenter);

    const hills = addEle('hills')


    for(var i = 0; i < 3; i++) {
        addEle('hill', hills)
    }
})