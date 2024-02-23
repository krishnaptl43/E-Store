export function getFilter(data){
    let category = [];
    let brand = [];
    data?.forEach(element => {
        brand.push(element.brand)
        category.push(element.category)
    });
    category = category.filter((item,index,arr)=>arr.indexOf(item)===index)
    brand = brand.filter((item,index,arr)=>arr.indexOf(item)===index)
    return {brand,category}
}
