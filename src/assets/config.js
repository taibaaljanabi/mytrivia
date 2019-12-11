import axios from 'axios'

//token request

export const token = async()=>{
    let token =''
    await axios.get('https://opentdb.com/api_token.php?command=request').then(res => {
        token = res.data.token
 })
    return await token
}
//category request

export const category = async()=>{
    let category = {}
    await axios.get('https://opentdb.com/api_category.php')
    .then(res =>{
        category = res.data.trivia_categories
    })
    return await category
}
// levels

export const levels = [
    {
        id: 'any',
        name: 'Any Difficulty'
    },
    {
        id: 'easy',
        name: 'Easy'
    },
    {
        id: 'medium',
        name: 'Medium'
    },
    {
        id: 'hard',
        name: 'Hard'
    }

]
//setting url 
export const setURL = (cat, level, token) =>{
    const category = Number(cat)
    let backupURL = `https://opentdb.com/api.php?amount=10&type=boolean&token=${token}&encode=url3986`
    
    if (category === 9 && level === 'any'){
        return {url:`https://opentdb.com/api.php?amount=10&type=boolean&token=${token}&encode=url3986`, backupURL }

    }
    if (category !== 9 && level === 'any'){
        return {url: `https://opentdb.com/api.php?amount=10&type=boolean&token=${token}&encode=url3986&category=${category}`, backupURL}
    }
    if(category === 9 && level !== 'any'){
        return {
          url:`https://opentdb.com/api.php?amount=10&type=boolean&token=${token}&encode=url3986&difficulty=${level}`, backupURL
        }
    }
    if (category !== 9 && level !== 'any'){
        return {url : `https://opentdb.com/api.php?amount=10&category=${category}&type=boolean&encode=url3986`, backupURL}
    }
}
