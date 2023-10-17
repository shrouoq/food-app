import {createSlice} from '@reduxjs/toolkit'

let setItemToLocalStorage = (item) => {
    localStorage.setItem('cartItem' , JSON.stringify(item))
}

let getItemFromLocalStorage = () =>{
    let item = localStorage.getItem('cartItem')

    if(item){
        let result = JSON.parse(localStorage.getItem('cartItem'))
        return result
    }else{
        return []
    }
}

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        data : getItemFromLocalStorage(),
        totalPrice : 0,
        totalItems : 0
    },
    reducers : {
        AddToCart : (state , action) => {
            let cartItem = state.data.find(ele => ele.id === action.payload.id)
            if(cartItem){
                let result = state.data.map(ele => {
                    if(ele.id === action.payload.id){
                        let totalQuty  = ele.totalQuty + action.payload.totalQuty
                        let totalPrice = ele.price * totalQuty
                        return {...ele , totalQuty , totalPrice}
                    }else{
                        return ele
                    }
                })

                state.data = result
                setItemToLocalStorage(state.data)

            }else{
                state.data.push(action.payload)
                setItemToLocalStorage(state.data)
            }
        },
        RemoveItem : (state , action) => {
            state.data = state.data.filter(ele => ele.id !== action.payload.id)
            setItemToLocalStorage(state.data)
        },
        Total : (state) => {
            let allTotalPrice = state.data.map(ele => ele.totalPrice).reduce((acc,cur) => acc+cur , 0)
            state.totalPrice = allTotalPrice
        },
        TotalItems : (state) => {
            let totalIt = state.data.map(ele => ele.totalQuty).reduce((acc , cur) => acc+cur , 0)
            state.totalItems = totalIt
        },
        HandeToggle : (state , action) => {
            let choosed = state.data.find(ele => ele.id === action.payload.id)
            if(choosed) {
                let result = state.data.map(ele => {
                    if(ele.id === action.payload.id){
                        let totalQty = ele.totalQuty
                        let totalP = totalQty * ele.price

                        if(action.payload.type === 'INC'){
                            totalQty++;
                            totalP = totalQty * ele.price
                        }
                        if(action.payload.type === "DEC"){
                            totalQty --;
                            if(totalQty < 0){
                                totalQty = 0
                            }
                            totalP = totalQty * ele.price
                        }

                        return {...ele , totalQuty : totalQty , totalPrice : totalP}
                    }else{
                        return ele
                    }
                })
               
                state.data = result
                setItemToLocalStorage(state.data)
            }

            
        }
    }
})

export default cartSlice.reducer
export const {AddToCart , RemoveItem , Total , TotalItems , HandeToggle} = cartSlice.actions