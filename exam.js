

// _________________________________________________________
const task = [ 'проснуться', 'поработать', 'погулять', 'поесть']

function updateTask(tasks,startIndex, newTask,  deleteCount) {
 tasks.splice(startIndex,deleteCount,newTask )
  return task;
}

console.log('11111111', updateTask(task, 0, 'поспать'))

// ________________________________________________________

const  task1 = ['проснуться', 'поработать', 'погулять', 'поесть']

function modifyTaskList(tasks, indexToRemove, taskToAdd, indexToReplece, newTask){
    //удаление задачи по индексу
    tasks.splice(indexToRemove,1)
    //добавление новой задачи
    tasks.splice(0,0,taskToAdd)
    // добавление новой задачи с заменой существующей
    tasks.splice(indexToReplece,0,newTask )
    return task1;
}

console.log (modifyTaskList(task1,3, 'learn js',1 , 'отдыхать'))

//_________________________________________________________________

let shoppingList = [ 'хлеб', 'молоко', 'яблоки', 'яйца', 'масло', ' сахар', 'мука']

function copyAndExtractList(shoppingList, startIndex, endIndex ){
    let copy = shoppingList.slice();
    let extracted = shoppingList.slice(startIndex, endIndex)
return {copy, extracted};
}

console.log (copyAndExtractList(shoppingList, 2, 6 ))

//___________________________________________________________________

const articles = [
    {title: 'bbbbbbb', views:700},
    {title: 'bbbbbbb', views:500},
    {title: 'bbbbbbb', views:400},
    {title: 'bbbbbbb', views:500},
    {title: 'bbbbbbb', views:200},


        
]

function getPopularArticles(articles, count){
    let  copyArticles = articles.sort(function(a,b){
    return  a.views  -  b.views 
    })
    
    let newarr = copyArticles.slice (0,count);
    
    return newarr;
} 


console.log(getPopularArticles(articles,  3))
console.log(getPopularArticles(articles,  4))
console.log(getPopularArticles(articles,  4))

/*Напишите функцию displayEmployeeInfo(employees), которая принимает массив объектов employees и
выводит информацию о каждом сотруднике в консоль.
объект содержит информацию о сотруднике:
имя (name), должность (position) и зарплата (salary).
// const employees = [
//     { name: 'Иван', position: 'Разработчик', salary: 3000 },
//     { name: 'Мария', position: 'Дизайнер', salary: 2500 },
//     { name: 'Алексей', position: 'Тестировщик', salary: 2800 }
// ];*/

const employees = [
        { name: 'Иван', position: 'Разработчик', salary: 3000 },
        { name: 'Мария', position: 'Дизайнер', salary: 2500 },
         { name: 'Алексей', position: 'Тестировщик', salary: 2800 }
]
 function displayEmployeeInfo(employees){
    let result = employees.forEach(element => {
        console.log(element.name)
        console.log(element.position)
        console.log(element.salary)
        console.log(`&{element.name} +'должность'+ &{element.position}  + 'зарплата' + &{element.salary} `)
    });
    return result
 };

 displayEmployeeInfo(employees)