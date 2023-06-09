import { Text, View, Image } from "react-native";
import { globalStyles } from "../../globalStyles";

export default function SixCost({navigator}) {
    const cards = [
        "https://cards.scryfall.io/normal/front/3/3/332280f7-03af-4ef8-b1ff-5ac5e4d3b3ce.jpg?1673483792", 
        "https://cards.scryfall.io/normal/front/a/0/a03fb3a7-3ef6-4162-aad2-82610492aa72.jpg?1675182771",
        "https://cards.scryfall.io/normal/front/3/2/32bbe3c3-d00f-4d53-8738-e4aceb6a01ab.jpg?1625977206", 
        "https://cards.scryfall.io/normal/front/c/9/c9bd60fc-2777-44bc-b314-a792e8e48360.jpg?1673147240",
        "https://cards.scryfall.io/normal/front/8/8/8823b43b-8a30-4226-b5a7-ac1c06ba146b.jpg?1674142733", 
        "https://cards.scryfall.io/normal/front/6/7/67d15ee6-916f-4ac9-a4d2-4a9bd389d451.jpg?1625193869",
        "https://cards.scryfall.io/normal/front/3/0/3035a97f-5104-4b56-84a4-5206e75607fc.jpg?1674142512", 
        "https://cards.scryfall.io/normal/front/a/f/af5105ee-09e2-4344-ab39-00f0e9034c47.jpg?1608910768",
        "https://cards.scryfall.io/normal/front/5/d/5d275f04-cc60-4e3f-95cc-3d02bc916b82.jpg?1599710280", 
        "https://cards.scryfall.io/normal/front/9/2/92613468-205e-488b-930d-11908477e9f8.jpg?1631051073",
        "https://cards.scryfall.io/normal/front/d/d/dd21a925-c76f-4c1d-b5b8-8d3352730e5f.jpg?1631586656", 
        "https://cards.scryfall.io/normal/front/d/f/dfe08e59-fdc4-436f-b05c-6ad386c46310.jpg?1604198488",
        "https://cards.scryfall.io/normal/front/f/c/fce002dc-5fb5-465b-935e-042121f1119d.jpg?1682209105", 
        "https://cards.scryfall.io/normal/front/3/c/3c35ca79-eb72-427a-a8ed-404b2214389a.jpg?1591227737",
        "https://cards.scryfall.io/normal/front/c/c/cc5eacd7-aaa7-4720-9794-52e7b098c82c.jpg?1604197464", 
        "https://cards.scryfall.io/normal/front/d/7/d7ce9104-0ad3-4d3d-bb2c-c456c25030f6.jpg?1679497505",
        "https://cards.scryfall.io/normal/front/3/6/36b1e963-9b8c-4103-abbc-580866f144e7.jpg?1682209156", 
        "https://cards.scryfall.io/normal/front/f/2/f26a79b9-9f09-476e-b914-cade929dd852.jpg?1593813028",
        "https://cards.scryfall.io/normal/front/d/6/d607b003-6b48-429c-a7fd-45b8dd1bb4f9.jpg?1665822343", 
        "https://cards.scryfall.io/normal/front/3/e/3ea495ff-33df-406b-98e3-5579e2158bbc.jpg?1610161688",
        "https://cards.scryfall.io/normal/front/7/7/7722682f-952c-4829-b4ef-e52300b7950e.jpg?1673148346", 
        "https://cards.scryfall.io/normal/front/9/4/9460e3c6-e745-41d3-8e17-0b92fb126a16.jpg?1601078219",
        "https://cards.scryfall.io/normal/front/8/8/8879190f-d8ff-47ce-a5d8-6a481a67236a.jpg?1559959262", 
        "https://cards.scryfall.io/normal/front/e/a/ea7047d8-8d32-48a3-829b-7eb5427ed53a.jpg?1562942114",
        "https://cards.scryfall.io/normal/front/5/7/57166f39-44b2-47ec-a4cb-39d3f7ffd5e0.jpg?1625193631", 
        "https://cards.scryfall.io/normal/front/3/8/3836dddd-a7e4-499f-ad49-ce298aa65720.jpg?1674136426",
        "https://cards.scryfall.io/normal/front/6/8/68ce4c64-9f82-4be1-aa3b-ba885b2d4307.jpg?1561945357", 
        "https://cards.scryfall.io/normal/front/8/7/870ebc0b-b748-4a21-b939-a48811451bba.jpg?1600700538",
        "https://cards.scryfall.io/normal/front/1/7/1779ab27-f0fc-4dc7-9a0f-01cd70776a31.jpg?1631588643", 
        "https://cards.scryfall.io/normal/front/7/e/7e599847-8ab0-4fd6-b2c0-cb44a7669aa5.jpg?1682209825",
        "https://cards.scryfall.io/normal/front/1/8/18723171-b9bb-434f-a4db-e751249c3af1.jpg?1682210006", 
        "https://cards.scryfall.io/normal/front/a/b/ab56cedb-1bcd-48a5-8503-a8e324e236ad.jpg?1562852933",
        "https://cards.scryfall.io/normal/front/0/3/039499c3-0b35-4e8e-b0c9-bdf0b4cd90d5.jpg?1562895901", 
        "https://cards.scryfall.io/normal/front/0/3/037b396c-2146-4d86-9d13-757685c850c7.jpg?1592710522",
        "https://cards.scryfall.io/normal/front/8/8/88733b6d-6d45-4318-ae49-623929231d17.jpg?1604194288", 
        "https://cards.scryfall.io/normal/front/7/d/7d069748-1969-471e-bb13-b575eb5f2616.jpg?1562614023",
        "https://cards.scryfall.io/normal/front/b/c/bce726fa-cf09-4709-89f9-31f954620449.jpg?1673484350", 
        "https://cards.scryfall.io/normal/front/c/4/c4125bb0-b104-438e-a6a2-97f9d141243c.jpg?1673149000",
        "https://cards.scryfall.io/normal/front/3/9/395465b8-f5ed-4668-9e6a-82257150c52c.jpg?1591321423", 
        "https://cards.scryfall.io/normal/front/9/6/96da0a4c-2865-4383-875a-9f5d6503baee.jpg?1641602776",
        "https://cards.scryfall.io/normal/front/a/9/a934590b-5c70-4f07-af67-fbe817a99531.jpg?1674137589", 
        "https://cards.scryfall.io/normal/front/2/a/2a2c0a2f-07fb-4cc0-9b99-e5ff4303028d.jpg?1651655234",
        "https://cards.scryfall.io/normal/front/9/f/9f64ef27-7ab5-4a70-99c1-3c8334547bed.jpg?1682208893", 
        "https://cards.scryfall.io/normal/front/e/d/ed875705-b7b6-4464-b16f-61629ffed04f.jpg?1594736535",
        "https://cards.scryfall.io/normal/front/a/0/a01f829b-22aa-4988-9698-5e1ebceb1dd8.jpg?1562866384", 
        "https://cards.scryfall.io/normal/front/1/2/123d1368-fbbe-48f8-9b44-d51946529322.jpg?1599706406",
        "https://cards.scryfall.io/normal/front/4/2/4262e71a-b1fa-4b54-b623-34f4a7ccd500.jpg?1673148523", 
        "https://cards.scryfall.io/normal/front/f/3/f358a52b-8044-404e-8d04-2ec5903386cc.jpg?1631047711",
        "https://cards.scryfall.io/normal/front/e/3/e376a953-2075-4595-a3ef-85d0f68aa8b2.jpg?1673484850", 
        "https://cards.scryfall.io/normal/front/7/0/70fd0439-294b-454c-b2af-e814b85f4590.jpg?1631233781",
        "https://cards.scryfall.io/normal/front/0/7/0700d1c1-faab-4a1a-b55d-a2fa4582a2b4.jpg?1601080240", 
        "https://cards.scryfall.io/normal/front/2/5/25eff27a-eb58-4a95-b2df-4a341cf9bef6.jpg?1599707883",
        "https://cards.scryfall.io/normal/front/4/b/4bc855d3-817c-4748-a7f5-1533d8b0e930.jpg?1562912732", 
        "https://cards.scryfall.io/normal/front/a/c/acba72e1-3f7f-4e5c-af3f-dfe37b5d61f9.jpg?1599708250",
        "https://cards.scryfall.io/normal/front/e/7/e7a7941b-68bf-48b1-a5ed-2013068b486c.jpg?1562627407", 
        "https://cards.scryfall.io/normal/front/9/c/9cd548d5-6162-4eff-adfc-69b7e3b45712.jpg?1641602708",
        "https://cards.scryfall.io/normal/front/d/b/db45122e-b5ef-487b-8ea9-59ea066d3c88.jpg?1608910247", 
        "https://cards.scryfall.io/normal/front/2/e/2e747ef1-a1ad-4859-a70c-3f935f017310.jpg?1562604064",
        "https://cards.scryfall.io/normal/front/1/c/1c5974dd-78fc-4bfb-8678-72041c797584.jpg?1674142001", 
        "https://cards.scryfall.io/normal/front/2/2/22e07a4d-8096-4532-bb00-e6e66f1c6843.jpg?1562903226",
        "https://cards.scryfall.io/normal/front/4/6/4608ea44-e1b2-42de-a0a2-e6d6d24d89d0.jpg?1592673105", 
        "https://cards.scryfall.io/normal/front/6/c/6c727f49-833a-4b79-9946-bfbc6b06999c.jpg?1673147587",
        "https://cards.scryfall.io/normal/front/f/a/fa04c8f5-e174-4055-a98c-efec2f064d69.jpg?1674141768", 
        "https://cards.scryfall.io/normal/front/e/d/edab83a9-35b5-4312-b8ee-1c042c02aa31.jpg?1631056966",
        "https://cards.scryfall.io/normal/front/6/b/6bba7509-db77-414f-926f-1f28a4117831.jpg?1562916641", 
        "https://cards.scryfall.io/normal/front/4/4/44917638-3c84-4c21-b139-5084e6e1efc6.jpg?1625191478",
        "https://cards.scryfall.io/normal/front/6/6/66139c73-8e14-433d-bcb6-ae3e518bcdfb.jpg?1562612886", 
        "https://cards.scryfall.io/normal/front/4/b/4b0d8dec-e139-4565-9259-3c24c54c1d45.jpg?1601079960",
        "https://cards.scryfall.io/normal/front/e/7/e7af88c9-70ca-484c-bddf-b705e0ea7bc7.jpg?1639436741", 
        "https://cards.scryfall.io/normal/front/a/5/a52b55b5-72d9-4364-9fd4-96f05367aece.jpg?1682210256",
        "https://cards.scryfall.io/normal/front/a/a/aa828bdc-221e-4e81-9e71-6f288690ddcd.jpg?1673149099", 
        "https://cards.scryfall.io/normal/front/0/a/0a403dbd-c127-4e3f-892f-f0950d92228a.jpg?1641602814",
        "https://cards.scryfall.io/normal/front/7/b/7b844055-7581-4fbf-a0c9-6c4e9328a83e.jpg?1562706210", 
        "https://cards.scryfall.io/normal/front/b/a/ba4fa4c8-f09f-4d97-a7d1-1b93caf7d4f9.jpg?1664413989",
        "https://cards.scryfall.io/normal/front/d/6/d6252913-7b8e-4746-91e0-658ce13cdf18.jpg?1562946063", 
        "https://cards.scryfall.io/normal/front/5/5/55ed38fc-dc1f-4a03-8869-147f7eb8646b.jpg?1562910780",
        "https://cards.scryfall.io/normal/front/2/9/2963205e-b181-44d1-809f-6577e29fa812.jpg?1681729100", 
        "https://cards.scryfall.io/normal/front/8/a/8a91dea7-9792-4714-82b0-ba2c06cef304.jpg?1562879466",
        "https://cards.scryfall.io/normal/front/1/d/1d93d905-cc36-4a78-b07c-07f8bbf39a47.jpg?1682208884", 
        "https://cards.scryfall.io/normal/front/7/5/75955b0e-12d6-40ba-aab5-b7b7e2bde121.jpg?1572893685",
        "https://cards.scryfall.io/normal/front/8/5/85a89077-b384-4fca-9d26-7297962c1541.jpg?1651655253", 
        "https://cards.scryfall.io/normal/front/6/8/68d57ab8-fbe0-4f01-b7f7-2a5cccd2d13a.jpg?1674142106",
        "https://cards.scryfall.io/normal/front/e/3/e31fd23d-e6b2-412b-b2ff-c99812365001.jpg?1616447038", 
        "https://cards.scryfall.io/normal/front/8/7/871c19fc-7d99-4022-9e13-d679a9e3547e.jpg?1677541540",
        "https://cards.scryfall.io/normal/front/3/0/301dacc9-ef92-4515-b907-a70d6c3fd73e.jpg?1643594300", 
        "https://cards.scryfall.io/normal/front/9/7/97eb1804-6fd8-4917-af36-87fdfce39d3a.jpg?1591228372",
        "https://cards.scryfall.io/normal/front/e/f/efc9db16-53d3-4d27-ba42-c3c445f2f92f.jpg?1682210293", 
        "https://cards.scryfall.io/normal/front/c/9/c96b11ad-67fd-4a2b-89ea-e9df9c50731e.jpg?1673485259",
        "https://cards.scryfall.io/normal/front/6/3/63349fa3-4462-413c-bd96-bbc1049165a0.jpg?1682210302", 
        "https://cards.scryfall.io/normal/front/c/a/ca5afa5e-6e8d-4390-8de5-217413807d89.jpg?1562623372",
        "https://cards.scryfall.io/normal/front/5/7/574d1a02-a403-4b6e-8ce0-a472325c9c2c.jpg?1591319710", 
        "https://cards.scryfall.io/normal/front/6/8/680f7d5c-d518-4ebb-92d5-e835cd9eafe0.jpg?1631586056",
        "https://cards.scryfall.io/normal/front/c/7/c788c6a6-20d9-4a93-a898-330b085226c4.jpg?1627767538", 
        "https://cards.scryfall.io/normal/front/9/c/9c381bc2-d26e-4d7e-9a0b-a8f7d2d802be.jpg?1674185833",
        "https://cards.scryfall.io/normal/front/5/b/5b11bb5a-66e3-4dc6-9df4-e1683c57e488.jpg?1625194477", 
        "https://cards.scryfall.io/normal/front/4/e/4e446e90-6e31-43ed-bcb1-a01422b503c0.jpg?1592517214",
        "https://cards.scryfall.io/normal/front/8/d/8d94b8ec-ecda-43c8-a60e-1ba33e6a54a4.jpg?1562616128", 
        "https://cards.scryfall.io/normal/front/3/4/3460149e-8511-4387-83b9-1e4365ff6ea2.jpg?1673484611",
        "https://cards.scryfall.io/normal/front/f/4/f402e6d9-8c72-4b31-bec5-4a1b3ffb39ae.jpg?1682209754", 
        "https://cards.scryfall.io/normal/front/4/4/44d544dc-1d2a-4b33-ae62-d0e0217db0a2.jpg?1674141374",
        "https://cards.scryfall.io/normal/front/d/5/d52868cb-087e-4f91-91bc-455f2e2e7cd7.jpg?1576381464", 
        "https://cards.scryfall.io/normal/front/b/7/b7717617-706a-4338-a207-dd8c08feb1c3.jpg?1674140963",
        "https://cards.scryfall.io/normal/front/a/4/a4ac18ae-0d1e-43f5-9cc9-722fa6e36fe5.jpg?1580181703", 
        "https://cards.scryfall.io/normal/front/5/6/56dd8c18-052b-4684-8ffa-f7d49af25759.jpg?1625192153",
        "https://cards.scryfall.io/normal/front/a/7/a706d4bb-0b44-4e43-b340-7de799c086b8.jpg?1562034880", 
        "https://cards.scryfall.io/normal/front/f/7/f7f99431-ae43-4b68-82f0-faf940216c91.jpg?1562645170",
        "https://cards.scryfall.io/normal/front/c/a/ca624ce6-5b99-41af-8e26-b952f5a30916.jpg?1651655310", 
        "https://cards.scryfall.io/normal/front/c/c/cce06cd4-099b-445f-af95-76564ee24668.jpg?1608909409",
        "https://cards.scryfall.io/normal/front/b/e/beb04702-5cb2-4590-b675-9409ba52a395.jpg?1561844079", 
        "https://cards.scryfall.io/normal/front/4/a/4abf9b03-4157-42f0-ab3d-484bd9b64bb2.jpg?1625193603",
        "https://cards.scryfall.io/normal/front/6/e/6e201980-e220-44dc-beab-ad13c20332bd.jpg?1562840239", 
        "https://cards.scryfall.io/normal/front/5/4/5489d43c-2034-421d-80e8-96a7377795c8.jpg?1591321364",
        "https://cards.scryfall.io/normal/front/9/2/920d56a4-fc94-43d8-9d65-361b66172a5f.jpg?1598304744", 
        "https://cards.scryfall.io/normal/front/b/1/b111df04-7687-47f9-8ffc-5cf25bc3e9bf.jpg?1592710138",
        "https://cards.scryfall.io/normal/front/f/a/fa0e443a-c479-40ab-9702-8beca3e5ab95.jpg?1631584716", 
        "https://cards.scryfall.io/normal/front/1/5/15f046d7-092c-4cac-8f9f-b284457620b8.jpg?1592710941",
        "https://cards.scryfall.io/normal/front/2/c/2c716d10-2130-43b7-a939-349d437e1091.jpg?1618519471", 
        "https://cards.scryfall.io/normal/front/6/4/644e5b24-394a-43f1-8384-186d6108f540.jpg?1576382089",
        "https://cards.scryfall.io/normal/front/7/d/7d3e97d8-92c7-43c4-bdaf-7b0a6ce7cb5f.jpg?1581481029", 
        "https://cards.scryfall.io/normal/front/9/d/9dae8fa6-c86e-492b-b28b-96d4ee83f6c6.jpg?1580014701",
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
            <Image style={{width: 400, height: 600}} source={{uri: newImage}}/>
        </View>
    )
}