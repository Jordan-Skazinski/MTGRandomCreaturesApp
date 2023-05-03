import { Text, View, Image } from "react-native";
import { globalStyles } from "../../globalStyles";

export default function NineCost({navigator}) {
    const cards = [
        "https://cards.scryfall.io/normal/front/8/c/8c342309-aef7-4733-ac1c-ff0b704539a7.jpg?1601079606", 
        "https://cards.scryfall.io/normal/front/d/2/d27cf7b7-7982-46bd-a559-7789c0e74bae.jpg?1673146904",
        "https://cards.scryfall.io/normal/front/e/3/e3fef480-ee0e-41e1-9db3-68e945e7e867.jpg?1673483600", 
        "https://cards.scryfall.io/normal/front/1/8/18adbda4-8d36-47cd-afbc-c785aaa8ed80.jpg?1599708735",
        "https://cards.scryfall.io/normal/front/9/4/9464a820-65de-44f2-9895-46a35e8621a0.jpg?1673146911", 
        "https://cards.scryfall.io/normal/front/8/f/8fa281e1-5c48-4bba-b8e9-88c6f5f53abb.jpg?1608910550",
        "https://cards.scryfall.io/normal/front/1/1/1192f7a9-102e-4b3a-b154-18c8eb332217.jpg?1562899233", 
        "https://cards.scryfall.io/normal/front/8/c/8cbedb0a-34ca-4d42-bb43-cbea0f3c6d02.jpg?1587039576",
        "https://cards.scryfall.io/normal/front/1/4/14a360b6-c7b4-4b25-8288-b3bb8d527bda.jpg?1562846236", 
        "https://cards.scryfall.io/normal/front/5/b/5b64cfc0-dace-4f54-b2b1-c92d8cb64c35.jpg?1593095672",
        "https://cards.scryfall.io/normal/front/5/6/568dd5a6-86f4-4039-87d7-812120c8ab94.jpg?1625192736", 
        "https://cards.scryfall.io/normal/front/f/0/f06fc6e0-b22c-40d3-bb53-d5ec400d921c.jpg?1562943286",
        "https://cards.scryfall.io/normal/front/8/d/8d74a469-c71d-4773-99d3-5456b31df424.jpg?1576383727", 
        "https://cards.scryfall.io/normal/front/3/f/3fdd84b5-fd93-483e-a131-028d04d9dea7.jpg?1562703113",
        "https://cards.scryfall.io/normal/front/5/f/5f8b022e-3e7a-40e6-99a0-53e5adbdafc5.jpg?1568003585", 
        "https://cards.scryfall.io/normal/front/4/7/474480b5-c60b-4c7f-9d3e-751bca43d074.jpg?1576383277",
        "https://cards.scryfall.io/normal/front/9/3/935ad5f7-f86c-4fea-94fe-d111d4435ac4.jpg?1625192822", 
        "https://cards.scryfall.io/normal/front/5/a/5aa75f2b-53c5-47c5-96d2-ab796358a96f.jpg?1555040980",
        "https://cards.scryfall.io/normal/front/1/b/1b66815d-f895-4c3b-be46-7f1e3b478cf5.jpg?1682210144", 
        "https://cards.scryfall.io/normal/front/1/0/10d42b35-844f-4a64-9981-c6118d45e826.jpg?1676994966",
        "https://cards.scryfall.io/normal/front/9/d/9d02e1e8-b85b-4e26-8ab8-ca2f49d05b88.jpg?1591227898", 
        "https://cards.scryfall.io/normal/front/4/4/44b45bdd-829a-4fc1-ad37-17c2bd57fac8.jpg?1559959227",
        "https://cards.scryfall.io/normal/front/3/e/3e7da55c-7f05-46b2-aa3c-17f8d5df46bb.jpg?1626099262", 
        "https://cards.scryfall.io/normal/front/9/f/9f7a6dfb-a8f8-4899-b2db-c48d542dfd55.jpg?1598304010",
        "https://cards.scryfall.io/normal/front/b/f/bfedfd30-8075-429e-a0fa-4919920c8632.jpg?1674137067", 
        "https://cards.scryfall.io/normal/front/5/4/543d55cb-3a6b-4620-af25-10ae74ed32c4.jpg?1562786456",
        "https://cards.scryfall.io/normal/front/d/f/df5a543e-8416-4f01-91f5-e1ed87f1a510.jpg?1592761517", 
        "https://cards.scryfall.io/normal/front/8/a/8a26fa15-d81f-4152-ae33-e91aa276b3fc.jpg?1627708455",
        "https://cards.scryfall.io/normal/front/c/3/c3200fa2-182f-4515-b326-ab4fdb95c8c1.jpg?1562879547", 
        "https://cards.scryfall.io/normal/front/5/a/5a3aa1ce-8757-4541-8ac7-1e7e203b60fc.jpg?1561981290",
        "https://cards.scryfall.io/normal/front/a/1/a1aa77ae-f685-48ee-85dc-ba6084cd30ba.jpg?1673148140", 
        "https://cards.scryfall.io/normal/front/e/b/eb5e63cc-eb4f-40c6-b298-99cb8fe8585f.jpg?1625191361",
        "https://cards.scryfall.io/normal/front/5/1/51cfea41-9051-4865-8539-c76c70d18523.jpg?1682209932", 
        "https://cards.scryfall.io/normal/front/f/1/f1fdb9bb-09a2-4ff7-bcd4-35ea33c1b752.jpg?1676452620",
        "https://cards.scryfall.io/normal/front/3/c/3c6cc01f-a14b-462d-9bfc-8f38d46a546a.jpg?1562396453", 
        "https://cards.scryfall.io/normal/front/6/1/6172da14-9a87-4cf9-aff5-aca3470a67ef.jpg?1626097900",
        "https://cards.scryfall.io/normal/front/a/8/a8a5d0ba-bcb1-41db-80dd-ad22b8408105.jpg?1561968078", 
        "https://cards.scryfall.io/normal/front/0/4/04c349f2-69b1-48dd-a547-f2b55f542700.jpg?1673300066",
        "https://cards.scryfall.io/normal/front/4/0/40cbb0db-94e9-4988-b900-ced4f9e6d4ed.jpg?1664411256", 
        "https://cards.scryfall.io/normal/front/1/5/15ab4c3b-323a-47c6-b675-447d16def3d5.jpg?1651656030",
        "https://cards.scryfall.io/normal/front/5/0/502740bf-0bff-4358-8996-1a27e5f0343f.jpg?1562830062", 
        "https://cards.scryfall.io/normal/front/e/0/e02e3d91-7723-46b8-a393-855b6e89d877.jpg?1561961880",
        "https://cards.scryfall.io/normal/front/4/2/420f0b81-8b87-4854-9dc4-6da84cc38623.jpg?1674420728", 
        "https://cards.scryfall.io/normal/front/2/1/212e3edb-62f1-4680-884f-70323547f8ad.jpg?1562902012",
        "https://cards.scryfall.io/normal/front/3/1/315ae21a-4d95-488e-812b-0d018219af6c.jpg?1626098305", 
        "https://cards.scryfall.io/normal/front/5/8/587cb384-db24-4e3d-a338-230e50305d31.jpg?1576383703",
        "https://cards.scryfall.io/normal/front/d/b/dbf26e54-bdfe-4da8-acbb-4f1a98faba49.jpg?1625192442", 
        "https://cards.scryfall.io/normal/front/7/6/76bf6bf0-4821-41eb-bacc-32e9a2d47845.jpg?1673147806",
        "https://cards.scryfall.io/normal/front/e/f/efb926ad-e762-4883-8841-73e034d8e21e.jpg?1562765619", 
        "https://cards.scryfall.io/normal/front/c/f/cfa77c4f-b20b-40cc-9dc4-276be75109a8.jpg?1673304768",
        "https://cards.scryfall.io/normal/front/9/f/9ff46819-bfb3-4448-ab4f-f22ff9e2b2b4.jpg?1562706825", 
        "https://cards.scryfall.io/normal/front/5/4/54e5e882-02d4-4d69-aabf-ae9bf31f2923.jpg?1562877079",
        "https://cards.scryfall.io/normal/front/b/e/be8a8e26-39cb-440a-a428-58b49ff8d017.jpg?1673309137", 
        "https://cards.scryfall.io/normal/front/2/5/25344729-19a5-496f-8e6f-ce7b69afdc68.jpg?1592672634",
        "https://cards.scryfall.io/normal/front/8/f/8f5f8d3a-95e7-4dd9-8510-43517eb02693.jpg?1562762504", 
        "https://cards.scryfall.io/normal/front/9/2/923eb713-c955-4e12-8a8f-df3b4b361487.jpg?1675905606",
        "https://cards.scryfall.io/normal/front/2/8/28309edb-f255-4b29-b7b6-e36e23ba0690.jpg?1562841674", 
        "https://cards.scryfall.io/normal/front/1/d/1dc3aa88-2555-4862-a771-e9d5b9eab3ad.jpg?1598918074",
        "https://cards.scryfall.io/normal/front/b/a/ba88e031-b194-4621-9e97-2f33ee46f6d0.jpg?1572893753", 
        "https://cards.scryfall.io/normal/front/3/8/38fc1715-4ddb-4404-83c6-0b8a61922578.jpg?1674421377",
        "https://cards.scryfall.io/normal/front/4/5/45dc82a0-f054-4614-a7b9-4c5a7c9d2a77.jpg?1562876707", 
        "https://cards.scryfall.io/normal/front/5/7/57fab4fc-c8de-47ef-a717-3adb58c2f5b6.jpg?1562460627",
        "https://cards.scryfall.io/normal/front/d/1/d175a716-5b69-401b-9902-684a30810288.jpg?1674135771", 
        "https://cards.scryfall.io/normal/front/9/6/96d81c13-93de-4cf6-bb15-d387ed259c50.jpg?1682382132",
        "https://cards.scryfall.io/normal/front/d/f/df630ae9-aa17-46e9-95e7-4980f4a76ade.jpg?1562765145", 
        "https://cards.scryfall.io/normal/front/0/4/04d1a29b-af80-4f9a-881b-ef7374ecbce1.jpg?1562524951",
        "https://cards.scryfall.io/normal/front/e/1/e1f9531a-7201-4dfc-beb1-4128ec41728c.jpg?1561771988", 
        "https://cards.scryfall.io/normal/front/3/1/3118737f-2fd9-4fe5-bd0f-43c9ef2166e2.jpg?1576383753",
        "https://cards.scryfall.io/normal/front/0/8/082690e8-07b9-4a91-b779-e0123a69ee12.jpg?1576383716", 
        "https://cards.scryfall.io/normal/front/1/6/16a58bb1-4c4d-41f2-9c69-d3c3a8a8ab09.jpg?1562875616",
        "https://cards.scryfall.io/normal/front/9/e/9e5a7117-b1e2-46bd-873e-baf9d9fac009.jpg?1562878783", 
        "https://cards.scryfall.io/normal/front/7/0/7002a87b-a55f-42ec-b247-119a3229129f.jpg?1598916741",
        "https://cards.scryfall.io/normal/front/8/4/845c4b06-090f-4217-acb2-8900b7dab37c.jpg?1562720458", 
        "https://cards.scryfall.io/normal/front/b/c/bc208f3e-5a6a-4fae-8a7c-2bed28ad0c41.jpg?1562879470",
        "https://cards.scryfall.io/normal/front/5/1/51ef4cda-e55b-45a8-9c02-4e77e5b15a9e.jpg?1562911611", 
        "https://cards.scryfall.io/normal/front/e/9/e956c695-bf0a-430c-a14e-196ae6ab7c9f.jpg?1592761583",
        "https://cards.scryfall.io/normal/front/4/e/4e13f122-0dfe-42f3-9815-9ae1a29fca99.jpg?1562493699", 
        "https://cards.scryfall.io/normal/front/0/e/0e0e53a1-11d5-4975-b698-8b5d72d241f0.jpg?1562628577",
        "https://cards.scryfall.io/normal/front/0/9/093426d2-29e0-49e4-b02a-a70cce3b25d5.jpg?1562782281", 
        "https://cards.scryfall.io/normal/front/f/8/f88297c1-c612-47bf-80b7-374099b00e07.jpg?1562831710",
        "https://cards.scryfall.io/normal/front/6/f/6f4400bf-134b-4011-985d-eed4e5ba1de8.jpg?1572893300", 
        "https://cards.scryfall.io/normal/front/a/0/a0418156-bcba-4edc-8ea5-ce9ca9b979bd.jpg?1674422415",
        "https://cards.scryfall.io/normal/front/5/7/57e8971d-baeb-4e4f-8c4d-0e8109e4505e.jpg?1562719278", 
        "https://cards.scryfall.io/normal/front/6/6/66c22071-959e-4986-aa25-ed883a20796b.jpg?1562877466",
        "https://cards.scryfall.io/normal/front/6/2/62f5c675-b629-45ec-907c-36594f5fe54a.jpg?1562637231", 
        "https://cards.scryfall.io/normal/front/f/4/f43fe8e0-23ab-4fe7-8a48-1902be142c6a.jpg?1562880691",
        "https://cards.scryfall.io/normal/front/3/f/3f41b01b-0c19-4f3f-93e5-d3df52fdd576.jpg?1562434957", 
        "https://cards.scryfall.io/normal/front/d/2/d22aa7ef-da34-49c1-9aac-67d129ffa6fe.jpg?1562639746",
        "https://cards.scryfall.io/normal/front/f/d/fd164011-7a8e-44a2-8599-0a1c0878b5b5.jpg?1562558295", 
        "https://cards.scryfall.io/normal/front/3/2/324bc757-9942-4862-b691-5af42e07f682.jpg?1562905516",
        "https://cards.scryfall.io/normal/front/2/4/249db4d4-2542-47ee-a216-e13ffbc2319c.jpg?1673146896", 
        "https://cards.scryfall.io/normal/front/6/1/6197b59e-1652-496c-a038-e2eb88ecf017.jpg?1562584407",
        "https://cards.scryfall.io/normal/front/a/e/aee01e9c-0445-4228-a73a-3e5744844ed3.jpg?1562927525", 
        "https://cards.scryfall.io/normal/front/8/4/8465c5dd-c246-49e4-89bf-18e022816162.jpg?1562921778",
        "https://cards.scryfall.io/normal/front/a/4/a4e96456-93bf-4d28-9a4b-5bc24ae07fc2.jpg?1562592819", 
    ]

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
            <Text>
                your ten cost is
            </Text>
            <Image style={{width: 400, height: 600}} source={{uri: newImage}}/>

        </View>
    )
}