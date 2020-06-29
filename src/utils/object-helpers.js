//изменяет объект в массиве объектов с определенным id
//propName - названия свойства с id элемента
//itemId - нужный id элемента массива, которого мы хотим изменить
//newProps - объект с новыми свойствами объекта
//items - сам массив
export const updateObjectInArray = (items, itemId, propName, newProps) => {
    items.map((item) => {
        if (item[propName] === itemId){
            debugger;
            return {...item, ...newProps}
        }
    })
};