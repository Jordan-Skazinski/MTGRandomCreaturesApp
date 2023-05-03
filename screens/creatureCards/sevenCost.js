import { Text, View, Image } from "react-native";
import { globalStyles } from "../../globalStyles";

export default function SevenCost({navigator}) {
    const cards = [
        "https://cards.scryfall.io/normal/front/9/6/9685faa0-46cc-4098-9ad7-cffece741baa.jpg?1673484460", 
        "https://cards.scryfall.io/normal/front/7/8/78c2bfef-06a5-4c7f-8283-ea3fb673b7a1.jpg?1562850573",
        "https://cards.scryfall.io/normal/front/8/b/8b207a4a-47d1-4905-81d3-455c59bfd7da.jpg?1600714694", 
        "https://cards.scryfall.io/normal/front/b/f/bf786c50-1ba1-4f81-a800-bc98189040dd.jpg?1674141366",
        "https://cards.scryfall.io/normal/front/d/8/d8299d1e-84c1-4c02-a00d-6e7a662e1a7a.jpg?1682210108", 
        "https://cards.scryfall.io/normal/front/e/3/e3c7a2f9-b3f3-4092-8ce9-777ad035baed.jpg?1682210079",
        "https://cards.scryfall.io/normal/front/7/7/77ceba8b-de19-4db8-b5a7-f5df49bf241f.jpg?1627708100", 
        "https://cards.scryfall.io/normal/front/b/2/b23c18f8-a19f-406a-ad60-491087f9d660.jpg?1674141513",
        "https://cards.scryfall.io/normal/front/a/9/a959b40d-dd8c-49d8-8003-744d0c877b04.jpg?1608912140", 
        "https://cards.scryfall.io/normal/front/a/3/a391da36-0b40-46ea-b771-50d2b920207e.jpg?1581480808",
        "https://cards.scryfall.io/normal/front/1/c/1c8429f1-1a91-4f29-8d56-4c061f21c183.jpg?1674141965", 
        "https://cards.scryfall.io/normal/front/c/5/c57b4876-5387-4f73-b8e2-8e7bdca8b0bc.jpg?1654566749",
        "https://cards.scryfall.io/normal/front/c/c/cc6686e6-4535-49be-b0b3-e76464656cd2.jpg?1639052497", 
        "https://cards.scryfall.io/normal/front/0/8/08c14bb4-c9d9-41ce-a075-a441522a52c6.jpg?1604195144",
        "https://cards.scryfall.io/normal/front/7/8/78ed184c-bb2a-47cc-a8e3-ba46b2fc4f64.jpg?1562850574", 
        "https://cards.scryfall.io/normal/front/3/5/35ad1ce5-6054-4f0c-8fbe-636be576d408.jpg?1631588294",
        "https://cards.scryfall.io/normal/front/6/e/6ef7c1a5-eb4e-4f75-ad41-1b84741ecab1.jpg?1674142281", 
        "https://cards.scryfall.io/normal/front/3/6/365c43c2-1a65-4f6a-860d-39dcb15255c3.jpg?1562273405",
        "https://cards.scryfall.io/normal/front/2/e/2ed2b1d9-3c23-4f2e-b816-6f2bea74b797.jpg?1604193525", 
        "https://cards.scryfall.io/normal/front/b/c/bc95881b-8fbf-4d82-b631-5e4404ccc28a.jpg?1592516205",
        "https://cards.scryfall.io/normal/front/a/9/a99dd58d-9fed-4d85-9bb5-f9c91834cab8.jpg?1604195687", 
        "https://cards.scryfall.io/normal/front/9/9/996c1952-8d10-4296-8960-ff8993833649.jpg?1626095167",
        "https://cards.scryfall.io/normal/front/3/5/3592fbe4-8588-486e-99ba-c327b0b6ba24.jpg?1568003491", 
        "https://cards.scryfall.io/normal/front/4/6/468d5308-2a6c-440e-a8d0-1c5e084afb82.jpg?1547517180",
        "https://cards.scryfall.io/normal/front/7/f/7f5cf828-17b2-4105-9a9a-ee0ab720c2ee.jpg?1636131321", 
        "https://cards.scryfall.io/normal/front/2/d/2de25ea4-284a-4c16-b823-048ff00c6a03.jpg?1631051668",
        "https://cards.scryfall.io/normal/front/9/3/93f786a2-a7b7-4f9e-92e8-9a6a11efe290.jpg?1627428096", 
        "https://cards.scryfall.io/normal/front/a/7/a79471f9-5cc0-48f5-9fa4-1f1374993825.jpg?1608912161",
        "https://cards.scryfall.io/normal/front/8/4/84e64f38-b1f3-47cd-8cfb-a4861369aca3.jpg?1643590379", 
        "https://cards.scryfall.io/normal/front/c/a/ca7f4fd6-e268-4d15-bfbf-d9f0f95864fc.jpg?1576383285",
        "https://cards.scryfall.io/normal/front/4/7/47ceeea0-dd47-4c5c-a713-f100571107b9.jpg?1677014556", 
        "https://cards.scryfall.io/normal/front/e/b/eb580daa-0cf3-4816-b8c5-49927682a91d.jpg?1651525805",
        "https://cards.scryfall.io/normal/front/5/a/5ad8f241-128a-473d-b8ce-994f8f66af72.jpg?1682208288", 
        "https://cards.scryfall.io/normal/front/9/6/9693e59b-032d-4ddc-a7d1-88a0f52dcc6c.jpg?1676913841",
        "https://cards.scryfall.io/normal/front/f/8/f8fd0e28-2bb4-4529-bbfb-1d70a419a91b.jpg?1625977356", 
        "https://cards.scryfall.io/normal/front/6/2/62dffe04-c431-440d-a8da-33c74b4bb683.jpg?1643592511",
        "https://cards.scryfall.io/normal/front/1/0/105238cf-b2c2-42d1-90d7-f30935ff78a6.jpg?1682208788", 
        "https://cards.scryfall.io/normal/front/2/f/2f0c4714-b9cd-48a3-8a2a-72860d0ac000.jpg?1562434028",
        "https://cards.scryfall.io/normal/front/b/8/b8705797-6d1f-4cec-b748-74ba402e606c.jpg?1675985473", 
        "https://cards.scryfall.io/normal/front/9/c/9c24fe81-a8b7-4b20-b5dd-1d1c91ff057f.jpg?1561759340",
        "https://cards.scryfall.io/normal/front/5/1/5195abc4-cfa7-45dd-aa96-2e56f818a17b.jpg?1677991284", 
        "https://cards.scryfall.io/normal/front/2/7/27ce43cb-44f4-4d94-8700-d9f3cc043989.jpg?1584897843",
        "https://cards.scryfall.io/normal/front/b/6/b6534049-3045-4546-b1e8-e5b1b0df5f56.jpg?1626094056", 
        "https://cards.scryfall.io/normal/front/f/a/fabdbd03-6f1e-4ada-ad90-5c72d7e305b6.jpg?1631587493",
        "https://cards.scryfall.io/normal/front/d/c/dc4997f0-dd2e-4f68-8bc0-13d7b2455323.jpg?1673485185", 
        "https://cards.scryfall.io/normal/front/f/0/f0bfc9e0-14e8-43ce-8fca-773b7f2387dc.jpg?1562566421",
        "https://cards.scryfall.io/normal/front/6/4/6430c61b-407d-471d-9012-07f1ddef28aa.jpg?1674135945", 
        "https://cards.scryfall.io/normal/front/6/0/60301fbc-1bd4-4c37-ad19-660d625a090a.jpg?1625192849",
        "https://cards.scryfall.io/normal/front/b/8/b82a13bf-da32-4c12-a9dd-271d8ca45c21.jpg?1674136077", 
        "https://cards.scryfall.io/normal/front/9/0/908e0ae3-6ef2-4110-9674-eb6c7eef0fa8.jpg?1637630730",
        "https://cards.scryfall.io/normal/front/2/7/27907985-b5f6-4098-ab43-15a0c2bf94d5.jpg?1625771736", 
        "https://cards.scryfall.io/normal/front/3/7/3741e62a-4b86-46ff-a7df-a8ceaf3b9a0c.jpg?1562907961",
        "https://cards.scryfall.io/normal/front/6/d/6dd0b9b0-55f4-4ce7-a916-6f23687f3fe4.jpg?1627709478", 
        "https://cards.scryfall.io/normal/front/4/2/421395b1-2694-42fd-bb90-0007e78adefc.jpg?1674134865",
        "https://cards.scryfall.io/normal/front/c/0/c0bdd07d-9fb9-4ee4-80db-494ee0cba58d.jpg?1608908641", 
        "https://cards.scryfall.io/normal/front/7/b/7bed9dbb-6a1d-411f-9139-3dc20258020a.jpg?1631587613",
        "https://cards.scryfall.io/normal/front/0/9/0984b1f1-dfc8-4cb9-90a3-e084950438bf.jpg?1674140893", 
        "https://cards.scryfall.io/normal/front/0/8/08076c82-edb6-4c3c-abda-3d3ad7bdd78f.jpg?1562272386",
        "https://cards.scryfall.io/normal/front/f/b/fb419d9d-e06f-48c8-a4f8-a57f9be39e50.jpg?1675957181", 
        "https://cards.scryfall.io/normal/front/7/8/781af4dd-9e3c-48af-80e9-b52c427d2120.jpg?1674136949",
        "https://cards.scryfall.io/normal/front/5/f/5f0d0c8d-c057-4a44-bd1e-38e1dd175778.jpg?1555040533", 
        "https://cards.scryfall.io/normal/front/7/5/75b83fe5-fd00-4532-bc67-07836abfc99c.jpg?1561831853",
        "https://cards.scryfall.io/normal/front/d/2/d26025f0-72c0-4875-b2d7-916666b835d9.jpg?1608910596", 
        "https://cards.scryfall.io/normal/front/d/9/d9b8259d-0bfa-4327-ac91-157c0b9e7dfb.jpg?1673148822",
        "https://cards.scryfall.io/normal/front/b/a/ba2b7213-f0db-4ef9-aab7-37028f9479af.jpg?1608911663", 
        "https://cards.scryfall.io/normal/front/1/8/1865ab25-b01a-4e2c-bf19-ffcb0806358f.jpg?1637628972",
        "https://cards.scryfall.io/normal/front/a/8/a8f5c7e2-f4da-4cee-a7d0-80b29bb73acd.jpg?1561840928", 
        "https://cards.scryfall.io/normal/front/7/e/7edbde38-1653-4eb5-b196-8881375781cb.jpg?1562558856",
        "https://cards.scryfall.io/normal/front/8/6/8637d263-5d7e-45bc-aad3-d97f57e6898e.jpg?1600715393", 
        "https://cards.scryfall.io/normal/front/c/4/c4ab472c-22b6-473e-b7b0-df2454eb930c.jpg?1673484422",
        "https://cards.scryfall.io/normal/front/4/4/4415d050-7a76-4f8b-bf78-e33dd21fe4f1.jpg?1562817335", 
        "https://cards.scryfall.io/normal/front/d/e/de4e445f-4d54-44a8-a5f5-ef02b3d57251.jpg?1641600760",
        "https://cards.scryfall.io/normal/front/1/6/160686f3-44fd-4f7a-81cf-d3b5b964bfba.jpg?1608912205", 
        "https://cards.scryfall.io/normal/front/a/b/abb21cf7-c5e6-4be5-8da5-9d29e95e2208.jpg?1625978098",
        "https://cards.scryfall.io/normal/front/4/e/4e7ae077-52c7-49a1-a61a-61e50b494616.jpg?1625976899", 
        "https://cards.scryfall.io/normal/front/8/0/8006515a-69de-4713-8318-79c0ef78a6d1.jpg?1673484139",
        "https://cards.scryfall.io/normal/front/8/3/8309f684-5912-4191-9f64-d573f1cc84c9.jpg?1562559115", 
        "https://cards.scryfall.io/normal/front/5/b/5b6f03c1-9e9d-4a0c-af3b-9753b440cd9f.jpg?1664412518",
        "https://cards.scryfall.io/normal/front/b/f/bfcfec58-bfe4-4b04-80e3-ee11c44e91a7.jpg?1562835499", 
        "https://cards.scryfall.io/normal/front/a/0/a07809b2-dabe-4242-84c3-fd640d7d5998.jpg?1547517989",
        "https://cards.scryfall.io/normal/front/0/f/0fb52b44-da5f-4f7a-a6c2-7924b855e051.jpg?1675957171", 
        "https://cards.scryfall.io/normal/front/5/c/5cf50d41-02ce-4a39-b3a0-82ddd7277fca.jpg?1592710219",
        "https://cards.scryfall.io/normal/front/8/0/80138656-b2e2-43bf-9fe6-7a852f53f9e9.jpg?1572482821", 
        "https://cards.scryfall.io/normal/front/c/8/c83542de-38ca-4aad-acba-189374be37e2.jpg?1681728814",
        "https://cards.scryfall.io/normal/front/d/0/d0346326-6bdf-4385-ab41-7b06e9f66ffd.jpg?1600699154", 
        "https://cards.scryfall.io/normal/front/7/6/76f0ae1f-75cf-4bb0-8651-fbf14fa59f81.jpg?1673148546",
        "https://cards.scryfall.io/normal/front/d/c/dc03ad3e-8113-432c-bff6-3ced73af8728.jpg?1682209373", 
        "https://cards.scryfall.io/normal/front/9/2/9203fde4-dbc1-449f-9618-4656f0e25e3c.jpg?1562925842",
        "https://cards.scryfall.io/normal/front/e/e/ee0a078d-045f-401b-a561-dcb1ad02bf62.jpg?1664413235", 
        "https://cards.scryfall.io/normal/front/2/b/2bfb85e8-278b-48a4-970e-e65bad1c4c47.jpg?1599708104",
        "https://cards.scryfall.io/normal/front/7/e/7eb90a6b-da46-44ab-88b8-31aaffdee75b.jpg?1562614387", 
        "https://cards.scryfall.io/normal/front/1/9/19c5cfbe-3972-4d2e-a37f-e96cca33bb33.jpg?1562551433",
        "https://cards.scryfall.io/normal/front/9/0/909dc123-8234-4e81-bb7b-77404d94a87c.jpg?1665823653", 
        "https://cards.scryfall.io/normal/front/0/6/06ed7c94-ed3c-427a-b62a-32e91e054671.jpg?1568003511",
        "https://cards.scryfall.io/normal/front/c/0/c0deb9ea-a0d4-4c3f-888e-abd1995cf2b3.jpg?1674135783", 
        "https://cards.scryfall.io/normal/front/d/6/d6fc6ed9-740a-4726-8f2c-5d662636f687.jpg?1631585971",
        "https://cards.scryfall.io/normal/front/1/8/18d9a1e7-fe87-40e0-bff9-a1fa84b3b949.jpg?1601079973", 
        "https://cards.scryfall.io/normal/front/b/5/b540c7c6-5b9e-4606-ac84-e583a62a3647.jpg?1591227479",
        "https://cards.scryfall.io/normal/front/1/f/1f5497d0-0765-4619-a218-b6a8709810cb.jpg?1631233596", 
        "https://cards.scryfall.io/normal/front/b/2/b2d40071-cadf-48de-a8ed-d55adbfab632.jpg?1631046953",
        "https://cards.scryfall.io/normal/front/1/d/1df2ca13-4062-4827-ae2f-c61cf88ba3b3.jpg?1568003461", 
        "https://cards.scryfall.io/normal/front/0/0/0020a124-ba76-4d40-84e9-9803268d9f16.jpg?1562895014",
        "https://cards.scryfall.io/normal/front/5/b/5bd5cd33-20e2-4063-b422-2bde13021888.jpg?1608912186", 
        "https://cards.scryfall.io/normal/front/f/2/f24b1030-64d5-4c94-a04c-1d9520bfddab.jpg?1591230455",
        "https://cards.scryfall.io/normal/front/4/a/4a1f905f-1d55-4d02-9d24-e58070793d3f.jpg?1676519555", 
        "https://cards.scryfall.io/normal/front/f/7/f791b7fa-3d12-409d-b017-cb9fd8b71af7.jpg?1608917702",
        "https://cards.scryfall.io/normal/front/0/4/04ea9067-ad50-4c43-ae4d-3f66890cd898.jpg?1624740360", 
        "https://cards.scryfall.io/normal/front/f/4/f40bd797-4d12-4098-a1a8-d7e5b7b82ac9.jpg?1654568412",
        "https://cards.scryfall.io/normal/front/5/f/5f73b249-be19-4a51-8759-648a2f122e6d.jpg?1673484860", 
        "https://cards.scryfall.io/normal/front/6/f/6ff6cd2f-3cef-408d-82a9-45338469f390.jpg?1592710473",
        "https://cards.scryfall.io/normal/front/5/6/5621db3f-a9e7-4350-9c6a-0ba04a628947.jpg?1562863255", 
        "https://cards.scryfall.io/normal/front/2/b/2b86b538-0766-440d-a2cd-f5d5bfcfb010.jpg?1641600129",
        "https://cards.scryfall.io/normal/front/5/f/5f6f90ae-340c-4eb7-b091-58db550be742.jpg?1631585116", 
        "https://cards.scryfall.io/normal/front/8/2/82824d05-5215-459a-aa73-3c5a6be3d464.jpg?1674137617",
        "https://cards.scryfall.io/normal/front/c/e/ce0c3b45-cf1d-4d85-9fe3-fb26b4b15dfd.jpg?1562793278", 
        "https://cards.scryfall.io/normal/front/b/2/b20a1d49-699d-413e-985b-7890f3e7115e.jpg?1592710957",
        "https://cards.scryfall.io/normal/front/3/5/3536a97f-565b-45c6-a54b-96afd2a268ec.jpg?1604197303", 
        "https://cards.scryfall.io/normal/front/9/5/95c14c4d-6c16-4826-8d93-d89ad04aee09.jpg?1682204132",
        "https://cards.scryfall.io/normal/front/7/d/7dcf3b3e-e986-4add-a3c6-4e92a6f72a12.jpg?1674174856", 
        "https://cards.scryfall.io/normal/front/6/8/68c8d00f-23f3-429a-a99a-a6f3ec21c137.jpg?1674141974",
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