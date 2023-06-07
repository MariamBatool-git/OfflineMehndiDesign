import Images from "../config/Images";

export const getFlatListDataGallery = (title) => {
    return Images[title].map((v, i) => {return {id : i, src : v}});
    // return Images[title].map((v, i) => {return {
    //     url: '',
    //     props: {
    //         source: v
    //     }
    // }});
}

export const getZoomViewrImages = (title) => {
    return Images[title].map((v, i) => {
        return {
            url: '',
            props: {
                source: v
            }
        }
    });
}

export const getCurrentIndex = (src, array = []) => {
    const index = array.findIndex(element => element.props.source == src);
    return index;
}


// // export const getImages = (start, length, base, extension) => {
//     let array = [];
//     for (let index = 1; index <= 7; index++) {
//         const element = `${base}${index}.${extension}`;
//       //  array.push(require(element));
//     }
//     return array;
// }