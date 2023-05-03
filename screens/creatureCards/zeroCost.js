import { Text, View, Image } from "react-native";
import { globalStyles } from "../../globalStyles";

export default function ZeroCost({navigator}) {
    const cards = ["https://cards.scryfall.io/normal/front/5/2/5272436e-74f0-44c4-a291-ea8ebc3f1525.jpg?1599710252","https://cards.scryfall.io/normal/front/b/b/bb3a843b-2dea-4b44-be74-c09c18b9b969.jpg?1619399228","https://cards.scryfall.io/normal/front/d/d/ddb96645-44d2-426c-90cb-3186297a8728.jpg?1576382362","https://cards.scryfall.io/normal/front/c/1/c1f53d7a-9dad-46e8-b686-cd1362867445.jpg?1576385590","https://cards.scryfall.io/normal/front/b/3/b34bf7fd-9fe3-43e2-8cfe-7ce7cff08afe.jpg?1572491124","https://cards.scryfall.io/normal/front/7/9/791c21fb-fc78-4106-9a42-abc73f41ab8b.jpg?1562026741","https://cards.scryfall.io/normal/front/4/6/469cc4e0-49c0-4009-97ea-28e44addec69.jpg?1562817049","https://cards.scryfall.io/normal/front/a/4/a4fab67f-00c2-4125-9262-d21a29411797.jpg?1644853041","https://cards.scryfall.io/normal/front/1/7/1730d219-a28f-4930-8088-4cfcb627f157.jpg?1562768217","https://cards.scryfall.io/normal/front/6/4/64820f4f-1f78-4338-beb8-5ed5a447cfe4.jpg?1562918655","https://cards.scryfall.io/normal/front/a/7/a73c630c-c98d-4f8a-9e6a-2576d5fec4ee.jpg?1591319305","https://cards.scryfall.io/normal/front/d/9/d99a9a7d-d9ca-4c11-80ab-e39d5943a315.jpg?1632831210","https://cards.scryfall.io/normal/front/9/9/9957ecca-5ea0-446f-bfd3-46c2aaa42f08.jpg?1557575872","https://cards.scryfall.io/normal/front/4/9/49b7a950-bf79-46fa-8b29-b7856b38e0fd.jpg?1587857370","https://cards.scryfall.io/normal/front/2/9/29a75dc8-1c24-4063-8944-d7e71b4a5755.jpg?1562277418"]

    function getRandomItem(arr) {

        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
    
        // get random item
        const item = arr[randomIndex];
    
        return item;
    }
    let newImage = ""
    newImage = getRandomItem(cards)

    return (
        <View style={globalStyles.container}>
            <Image style={{width: 400, height: 600}} source={{uri: newImage}}/>

        </View>
    )
}