import {Text, Image, View, StyleSheet} from "react-native";

function ImagesWithLink():JSX.Element
{
    return (
        <View style = {styles.outerContainer}>
            <Text style = {styles.heading}>Displaying the image with link</Text>
            <Image 
            source = {
                {
                    uri : "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww"
                }
            }
            style = {styles.imageDesign}
            ></Image>
        </View>
        
    );
}

const styles = StyleSheet.create({
    outerContainer : {
        margin : 10
    },
    heading : {
        paddingVertical : 5
    },
    imageDesign : {
        width : "100%",
        height : 250
    }

})

export default ImagesWithLink