import { Colors } from "../theme/Colors"
export const homeOptions = () => {
    return{
        title : 'MEHNDI DESIGNS',
    }
}

export const galleryOptions = (route) => {
    return {
        title : route.params.headerTitle,
    }
}
export const screenOptions = () => {
    return{
        headerStyle : {
            backgroundColor : Colors.BUTTON_COLOR,
        },
        headerTintColor : Colors.TEXT_COLOR,
    }
}