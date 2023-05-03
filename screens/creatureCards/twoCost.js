import { Text, View, Image } from "react-native";
import { globalStyles } from "../../globalStyles";

export default function TwoCost({navigator}) {
    const cards = [
        "https://cards.scryfall.io/normal/front/0/b/0b064748-515a-4234-ad00-8a735d7aa385.jpg?1682693512", 
        "https://cards.scryfall.io/normal/front/9/e/9e2e3efb-75cb-430f-b9f4-cb58f3aeb91b.jpg?1673147774",
        "https://cards.scryfall.io/normal/front/6/9/693dd112-d04a-4404-8fce-74f7e5497312.jpg?1673147465", 
        "https://cards.scryfall.io/normal/front/5/2/52ef00c1-613a-4cbd-8972-77c41f649431.jpg?1674141830",
        "https://cards.scryfall.io/normal/front/d/c/dce5db87-4a78-4b8d-b5c2-918ccd1ba4e3.jpg?1626095427", 
        "https://cards.scryfall.io/normal/front/7/2/726e8b29-13e9-4138-b6a9-d2a0d8188d1c.jpg?1680582212",
        "https://cards.scryfall.io/normal/front/9/8/98b0a4a8-9319-451b-9b79-b0bca7a41e91.jpg?1628801742", 
        "https://cards.scryfall.io/normal/front/a/4/a4b759f0-901f-4be3-93fa-224609b08d48.jpg?1604199124",
        "https://cards.scryfall.io/normal/front/f/d/fd06fc1f-d8f6-43b0-a795-d759fcdf8272.jpg?1673148027", 
        "https://cards.scryfall.io/normal/front/b/4/b451783a-8824-4eeb-8fd6-c9290ce7ccdb.jpg?1673305459",
        "https://cards.scryfall.io/normal/front/b/4/b4c4f694-618a-43ed-8781-2a51a234ba8e.jpg?1592765335", 
        "https://cards.scryfall.io/normal/front/f/3/f332cd21-46ed-4fff-9fd9-d5975bf0004d.jpg?1682208488",
        "https://cards.scryfall.io/normal/front/e/7/e7f9bbf2-aa52-4daf-937e-29aef8810d35.jpg?1682690617", 
        "https://cards.scryfall.io/normal/front/9/3/93887cc3-888e-479f-9cc2-a0b908e364a5.jpg?1651655659",
        "https://cards.scryfall.io/normal/front/b/a/ba264166-948b-47d4-b302-64476acc1a55.jpg?1581480578", 
        "https://cards.scryfall.io/normal/front/7/2/72ad8e04-f3be-4bc8-b62d-e92291317aab.jpg?1562274153",
        "https://cards.scryfall.io/normal/front/6/7/67d93e17-13fd-4cf5-a53c-a7b6c57a8351.jpg?1673484773", 
        "https://cards.scryfall.io/normal/front/4/d/4d42e22d-f60e-40c5-b069-5e1708f3bebc.jpg?1681729270",
        "https://cards.scryfall.io/normal/front/c/1/c1c080cf-a5e8-4d9d-af49-f78588971e87.jpg?1631586379", 
        "https://cards.scryfall.io/normal/front/f/6/f6589e02-8c84-4069-88d1-ebcc8520cae1.jpg?1674134875",
        "https://cards.scryfall.io/normal/front/b/3/b3d8c95e-09b9-46d6-80e9-95adb2c2ea9d.jpg?1682209534", 
        "https://cards.scryfall.io/normal/front/4/8/487ec3a9-416f-4370-a8e2-996b982dfc96.jpg?1576383171",
        "https://cards.scryfall.io/normal/front/4/c/4c23b2d4-fdbc-4c62-8e5b-c9235c53c96e.jpg?1562376394", 
        "https://cards.scryfall.io/normal/front/2/1/219577e6-758a-4135-9a8d-f95df964137a.jpg?1673147968",
        "https://cards.scryfall.io/normal/front/d/d/dd82846e-f119-4b27-a795-7b1ceebab4b0.jpg?1631586805", 
        "https://cards.scryfall.io/normal/front/9/4/944ca6e7-084b-424a-80c1-e88de192fd98.jpg?1661583510",
        "https://cards.scryfall.io/normal/front/8/7/87ead6ac-b1c5-4852-8413-7fa43c6cfc57.jpg?1557577084", 
        "https://cards.scryfall.io/normal/front/2/2/22579ac0-ad3f-4000-a65a-46a17a7f1aa5.jpg?1626096777",
        "https://cards.scryfall.io/normal/front/d/8/d859de3a-0be1-4e66-b438-1c3d4ee756cd.jpg?1654566909", 
        "https://cards.scryfall.io/normal/front/e/f/ef8d8d0c-cb0e-4745-a0fb-d556c9324428.jpg?1674141209",
        "https://cards.scryfall.io/normal/front/0/b/0babfe00-9bad-48fc-b3b1-df8280242fd2.jpg?1681729369", 
        "https://cards.scryfall.io/normal/front/0/8/085107a2-c1ec-473c-81d8-23e5a7197776.jpg?1562202038",
        "https://cards.scryfall.io/normal/front/0/7/079e6263-e54c-4899-a336-5315909b9322.jpg?1631049453", 
        "https://cards.scryfall.io/normal/front/6/5/6504e634-d8cd-41bc-978d-769431bd896d.jpg?1673147157",
        "https://cards.scryfall.io/normal/front/c/9/c9f8b8fb-1cd8-450e-a1fe-892e7a323479.jpg?1643587106", 
        "https://cards.scryfall.io/normal/front/b/0/b0d88239-43dc-46b8-8d46-626e2f8f1070.jpg?1598304507",
        "https://cards.scryfall.io/normal/front/d/a/dab85ca8-1ce8-43df-a6a1-00fef6b1d1c0.jpg?1631587319", 
        "https://cards.scryfall.io/normal/front/3/e/3e1766e9-2fa7-4446-a255-7beea1467ece.jpg?1654566400",
        "https://cards.scryfall.io/normal/front/b/e/be573ae7-967a-4b98-9058-ec3ff82ff63f.jpg?1682209516", 
        "https://cards.scryfall.io/normal/front/6/0/60e16d94-1166-4050-8554-686e153a7f80.jpg?1576381454",
        "https://cards.scryfall.io/normal/front/6/d/6dfd52a8-14c0-4e53-862e-01da4d7823e2.jpg?1631585948", 
        "https://cards.scryfall.io/normal/front/b/8/b8b906eb-3223-474c-9b74-eda2c280f9c5.jpg?1675567470",
        "https://cards.scryfall.io/normal/front/7/2/72204934-f5aa-4559-8f7e-7b0b223580d0.jpg?1674142724", 
        "https://cards.scryfall.io/normal/front/6/7/67f0a63e-0866-423e-b917-fc7c71063021.jpg?1675956992",
        "https://cards.scryfall.io/normal/front/7/e/7ea4b5bc-18a4-45db-a56a-ab3f8bd2fb0d.jpg?1664410287", 
        "https://cards.scryfall.io/normal/front/f/6/f606ebf1-483d-4331-b16a-9fb6f591a39f.jpg?1608910296",
        "https://cards.scryfall.io/normal/front/e/3/e3378fe8-3355-48aa-90d4-9cb739200160.jpg?1584830686", 
        "https://cards.scryfall.io/normal/front/8/d/8de3fdae-cc2c-4a14-b15b-4fe1a983dfbf.jpg?1562924943",
        "https://cards.scryfall.io/normal/front/4/d/4d3473d0-b46f-41f5-ac1e-ba217f7747d4.jpg?1599710314", 
        "https://cards.scryfall.io/normal/front/1/a/1ab94f16-778d-4437-a1b9-2f67cd214cc0.jpg?1673148071",
        "https://cards.scryfall.io/normal/front/0/3/03a4e477-22d4-49b4-8e36-160bb4810e2b.jpg?1631587129", 
        "https://cards.scryfall.io/normal/front/1/a/1aa4eba9-9e91-4beb-9296-a18baa73a318.jpg?1576382339",
        "https://cards.scryfall.io/normal/front/1/c/1c3f0ffe-cf51-4c30-8cd5-9e3c7e92c019.jpg?1673307936", 
        "https://cards.scryfall.io/normal/front/7/a/7aa3f166-c5d1-40f0-9b23-352424b8e13a.jpg?1682209700",
        "https://cards.scryfall.io/normal/front/c/7/c70d5d1f-30e7-4a14-9bd9-2b654549f7ac.jpg?1682208932", 
        "https://cards.scryfall.io/normal/front/3/e/3e92d855-397f-47e0-942f-002838ad3aed.jpg?1561929533",
        "https://cards.scryfall.io/normal/front/d/8/d8c9c111-fbc7-44e1-94bd-1ca164370623.jpg?1572893254", 
        "https://cards.scryfall.io/normal/front/f/f/ff971ba7-68b8-482a-9cb1-741f6893550c.jpg?1634349933",
        "https://cards.scryfall.io/normal/front/3/f/3f1b0b1f-a152-4bc8-923c-1b3a7f151295.jpg?1625979399", 
        "https://cards.scryfall.io/normal/front/a/b/abc8e0f8-fdb9-4f24-a3e3-439f6cc3ebdc.jpg?1599706625",
        "https://cards.scryfall.io/normal/front/4/9/49be3f34-f140-46ec-a59d-bed4dcc34ad4.jpg?1673483912", 
        "https://cards.scryfall.io/normal/front/6/7/6750e203-1215-4203-b5b8-3f1b18940839.jpg?1634349393",
        "https://cards.scryfall.io/normal/front/8/f/8f932690-9a38-4a3f-8805-a192208152a3.jpg?1562612973", 
        "https://cards.scryfall.io/normal/front/d/9/d9704f4f-eb5b-4862-8efd-ff1d8fd4177a.jpg?1562840713",
        "https://cards.scryfall.io/normal/front/9/c/9c3baad6-d087-436f-a9f4-c138639e3422.jpg?1637630818", 
        "https://cards.scryfall.io/normal/front/3/c/3c1baaa2-bd0b-4627-b93a-0753e0acd0f2.jpg?1664412296",
        "https://cards.scryfall.io/normal/front/1/8/187d5819-6a63-4e4f-98c4-18191c03f164.jpg?1631588057", 
        "https://cards.scryfall.io/normal/front/f/f/ff84ea71-e477-44f7-a3f8-77fef708efeb.jpg?1604195053",
        "https://cards.scryfall.io/normal/front/7/0/7096c9a6-2e73-41f8-b20a-b29a9f0b760c.jpg?1572893134", 
        "https://cards.scryfall.io/normal/front/3/b/3bfc626c-1a03-4346-ba07-e26385ec0fd8.jpg?1674141948",
        "https://cards.scryfall.io/normal/front/7/e/7e41765e-43fe-461d-baeb-ee30d13d2d93.jpg?1547516526", 
        "https://cards.scryfall.io/normal/front/f/4/f408c5e4-e18d-4e4d-959a-f41df4c3019c.jpg?1627701994",
        "https://cards.scryfall.io/normal/front/e/7/e79269af-63eb-43d2-afee-c38fa14a0c5b.jpg?1634347444", 
        "https://cards.scryfall.io/normal/front/b/4/b4c68bad-c7ee-4dbc-ad06-8c4d9446884e.jpg?1636223711",
        "https://cards.scryfall.io/normal/front/8/c/8c344783-63ca-42d0-9cba-aaaa1bc3b622.jpg?1592710930", 
        "https://cards.scryfall.io/normal/front/c/c/cc75f9f1-5873-450f-a0b2-871b55036954.jpg?1674140781",
        "https://cards.scryfall.io/normal/front/1/4/14d265aa-c1d8-4faa-b282-5c273ab725fd.jpg?1604192456", 
        "https://cards.scryfall.io/normal/front/0/9/096d3c0c-98e2-4cfc-a6e1-fddb0359c63f.jpg?1627708190",
        "https://cards.scryfall.io/normal/front/0/f/0fd2adb3-a6f4-448e-af2a-15ca92b1de63.jpg?1581478995", 
        "https://cards.scryfall.io/normal/front/a/7/a747e6cf-c687-4c4f-8e07-d51165d6cb62.jpg?1654567747",
        "https://cards.scryfall.io/normal/front/b/b/bba1650f-eddf-49a9-820e-489cb8d5b6fa.jpg?1627702172", 
        "https://cards.scryfall.io/normal/front/e/2/e2093386-ad77-4b35-982b-518ee4c05cc6.jpg?1625193922",
        "https://cards.scryfall.io/normal/front/6/6/663b3e6f-1099-4de8-a0a7-6f1919c38010.jpg?1572489709", 
        "https://cards.scryfall.io/normal/front/6/3/63cda4a0-0dff-4edb-ae67-a2b7e2971350.jpg?1591228085",
        "https://cards.scryfall.io/normal/front/8/0/80382963-a9d7-4c2d-8671-8dd3fdd4dbdc.jpg?1592516227", 
        "https://cards.scryfall.io/normal/front/d/c/dcb94950-3f3e-4876-84f8-d5e4d9cfecee.jpg?1572489646",
        "https://cards.scryfall.io/normal/front/a/e/aec6b2b7-625a-451d-bc0b-4456f5bf2719.jpg?1608911166", 
        "https://cards.scryfall.io/normal/front/8/c/8c84150f-e2bf-42a2-b2f7-2b6004b29fa4.jpg?1641602498",
        "https://cards.scryfall.io/normal/front/0/1/01842079-5c70-4e87-a1c5-c814a44ba0f5.jpg?1675347756", 
        "https://cards.scryfall.io/normal/front/5/1/513ba8b6-9583-405f-84a5-9d2ca42f9597.jpg?1626100911",
        "https://cards.scryfall.io/normal/front/5/2/520e5505-429b-4da0-b25e-14b8d4e81ce3.jpg?1654568680", 
        "https://cards.scryfall.io/normal/front/f/8/f836b155-8829-460b-91f8-4cd00b988196.jpg?1601080289",
        "https://cards.scryfall.io/normal/front/d/d/dd420010-6eaf-4853-8b7b-11de1157416b.jpg?1641601922", 
        "https://cards.scryfall.io/normal/front/6/9/69467d04-6c7d-44d1-88c4-9721741d6034.jpg?1682209497",
        "https://cards.scryfall.io/normal/front/5/3/5366900b-2abf-4e5c-8507-f51aca9c7ce8.jpg?1654568491", 
        "https://cards.scryfall.io/normal/front/1/0/107c8aa8-c8f8-4cbf-821b-bd2cb33354f0.jpg?1576382180",
        "https://cards.scryfall.io/normal/front/1/c/1ca736c7-35a9-48c7-b5a9-69b2a6e33ad0.jpg?1654567661", 
        "https://cards.scryfall.io/normal/front/2/4/24614006-d99f-44b6-8ec1-29b48a1713d0.jpg?1661583571",
        "https://cards.scryfall.io/normal/front/2/f/2f5ec787-79f6-4922-a0f7-debde8f7a4be.jpg?1591228226", 
        "https://cards.scryfall.io/normal/front/8/f/8f3482ec-8466-4680-bfdc-e1029c0fbe89.jpg?1619395794",
        "https://cards.scryfall.io/normal/front/d/4/d40b65c1-b24d-492d-81b9-d8474ebdc08c.jpg?1562832168", 
        "https://cards.scryfall.io/normal/front/c/4/c497d496-1232-4614-93b0-9864fa93c29f.jpg?1584831655",
        "https://cards.scryfall.io/normal/front/d/5/d5ef9f3b-d6f8-4795-ba96-2f92b8792360.jpg?1674142679", 
        "https://cards.scryfall.io/normal/front/2/f/2f6d50f3-5f5f-4bf3-b132-e527b70be33f.jpg?1673483704",
        "https://cards.scryfall.io/normal/front/6/5/65010991-2097-4769-be96-f24b4bf9276f.jpg?1673148758", 
        "https://cards.scryfall.io/normal/front/2/3/235d1ffc-72aa-40a2-95dc-3f6a8d495061.jpg?1604199647",
        "https://cards.scryfall.io/normal/front/d/1/d1682673-e947-44e2-b9c9-cbcb9a16892b.jpg?1654568377", 
        "https://cards.scryfall.io/normal/front/5/8/58da074a-a776-4e3f-be04-9e7f18320ae1.jpg?1631050142",
        "https://cards.scryfall.io/normal/front/7/3/730c521f-ba12-48fb-b18f-6bb55423a551.jpg?1562850143", 
        "https://cards.scryfall.io/normal/front/8/9/89b39293-6f57-4294-85fc-c718bdbb4d40.jpg?1675957129",
        "https://cards.scryfall.io/normal/front/6/c/6cd9d800-6d31-42e2-87d2-772db0ff95ed.jpg?1591228355", 
        "https://cards.scryfall.io/normal/front/9/c/9cd2b567-0cf7-4441-b3ce-e31141dd91c8.jpg?1627428607",
        "https://cards.scryfall.io/normal/front/c/6/c6d36786-6e36-4a9b-97ad-ad7d9d2b8d92.jpg?1682209691", 
        "https://cards.scryfall.io/normal/front/f/f/ff1d88a6-a74d-44b5-b7a8-866e866807f1.jpg?1631047962",
        "https://cards.scryfall.io/normal/front/7/e/7e0acfb7-c2d9-4b94-9ac6-9374856abad1.jpg?1599708540", 
        "https://cards.scryfall.io/normal/front/d/3/d38c9891-36d1-4565-9c4a-1cd9dbf8c048.jpg?1584831407",
        "https://cards.scryfall.io/normal/front/2/1/21e27b91-c7f1-4709-aa0d-8b5d81b22a0a.jpg?1606762176", 
        "https://cards.scryfall.io/normal/front/c/0/c091fe70-ade7-43f9-9081-3263a2524d51.jpg?1673484812",
        "https://cards.scryfall.io/normal/front/6/0/60e53d61-fcc3-4def-8206-052b46f62deb.jpg?1636224528", 
        "https://cards.scryfall.io/normal/front/b/9/b99ff81f-08d9-4b4a-a879-de5e5e402802.jpg?1580014727",
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