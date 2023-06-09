import { Text, View, Image } from "react-native";
import { globalStyles } from "../../globalStyles";

export default function OneCost({navigator}) {
    const cards = [
        "https://cards.scryfall.io/normal/front/a/0/a07f9f4b-fdac-42c7-b3e7-1852578a35c1.jpg?1682525570", 
        "https://cards.scryfall.io/normal/front/f/e/feefe9f0-24a6-461c-9ef1-86c5a6f33b83.jpg?1594681430",
        "https://cards.scryfall.io/normal/front/f/3/f3537373-ef54-4578-9d05-6216420ee349.jpg?1626093502", 
        "https://cards.scryfall.io/normal/front/9/a/9a9da45b-54ae-49c1-af50-8b88912c5bcd.jpg?1649270080",
        "https://cards.scryfall.io/normal/front/e/f/ef7a1bd1-abcd-4e06-9b38-f9e79bad71fa.jpg?1667593121", 
        "https://cards.scryfall.io/normal/front/3/1/3178e55c-7e49-4621-906a-a66e5656e276.jpg?1643831775",
        "https://cards.scryfall.io/normal/front/0/a/0a02a28d-ac00-40c5-9590-de029c007dde.jpg?1562639666", 
        "https://cards.scryfall.io/normal/front/a/5/a5e19147-e459-43a6-8ef0-e37968a462e3.jpg?1674141175",
        "https://cards.scryfall.io/normal/front/f/3/f395278e-6d74-4f35-af9d-21bad7b19763.jpg?1562952805", 
        "https://cards.scryfall.io/normal/front/d/1/d14f9fc8-e48c-473f-ba6b-9cffce94bb53.jpg?1580015151",
        "https://cards.scryfall.io/normal/front/0/a/0a19da90-880e-4eca-8cf7-6d7baf090d53.jpg?1562201576", 
        "https://cards.scryfall.io/normal/front/a/9/a9738cda-adb1-47fb-9f4c-ecd930228c4d.jpg?1681963138",
        "https://cards.scryfall.io/normal/front/a/b/aba51852-af8f-49d8-8fb6-22d52a1742b8.jpg?1626097603", 
        "https://cards.scryfall.io/normal/front/5/f/5fe5fe13-b57d-4514-89e6-79909474f7e8.jpg?1562548613",
        "https://cards.scryfall.io/normal/front/e/6/e681338b-9938-4db0-bb95-28c460a98acf.jpg?1630616483", 
        "https://cards.scryfall.io/normal/front/0/a/0a22ee47-fc56-436d-8570-88fbff421027.jpg?1562845354",
        "https://cards.scryfall.io/normal/front/4/0/400382a4-aea2-4827-b06a-1b0b3745908b.jpg?1599707413", 
        "https://cards.scryfall.io/normal/front/d/0/d0e5f191-0b20-4bc4-b41e-36c53a182f85.jpg?1608909458",
        "https://cards.scryfall.io/normal/front/1/7/17cd920a-de09-454a-a9da-c84512e3aff1.jpg?1562272459", 
        "https://cards.scryfall.io/normal/front/9/5/951ff2ed-9af0-4551-929a-ba6679fc2e15.jpg?1673147536",
        "https://cards.scryfall.io/normal/front/0/9/09656d96-c366-49ec-b687-cad903de1385.jpg?1673147166", 
        "https://cards.scryfall.io/normal/front/7/a/7a0d52a9-8694-46b4-aa0e-7b42b45b11db.jpg?1657120260",
        "https://cards.scryfall.io/normal/front/6/0/60d695b3-b02b-42c6-bf1b-9d97a8d82eae.jpg?1592673224", 
        "https://cards.scryfall.io/normal/front/4/e/4e117771-5a8b-4812-b487-32ba34b7f724.jpg?1562201124",
        "https://cards.scryfall.io/normal/front/2/b/2b737126-50b5-4678-91bf-197b64086fe4.jpg?1562301182", 
        "https://cards.scryfall.io/normal/front/2/d/2dfc4cfe-d1f7-43e4-a543-35c050d01a8f.jpg?1631587151",
        "https://cards.scryfall.io/normal/front/4/c/4c539843-4e3f-47a7-92e1-412eaaa2d9c5.jpg?1646666263", 
        "https://cards.scryfall.io/normal/front/7/a/7afa0ee5-a0b8-472e-9991-09402ddb5de3.jpg?1673147976",
        "https://cards.scryfall.io/normal/front/3/2/320fdf89-e158-41c5-b0bf-fee9dec36a75.jpg?1626100621", 
        "https://cards.scryfall.io/normal/front/f/b/fb885d30-c6e5-494a-bc01-3d5085b8e262.jpg?1682208524",
        "https://cards.scryfall.io/normal/front/d/6/d6e1dd43-8ce8-4225-8a04-d6f071f5fb31.jpg?1641602156", 
        "https://cards.scryfall.io/normal/front/b/1/b1211495-12ba-4f57-90f9-8befec5fc03d.jpg?1630617166",
        "https://cards.scryfall.io/normal/front/7/3/738ce273-c938-42d2-83b2-c4f5f4000b0b.jpg?1604194671", 
        "https://cards.scryfall.io/normal/front/3/6/36c8c075-9597-412e-9fc4-9d73b4405d12.jpg?1581478926",
        "https://cards.scryfall.io/normal/front/3/9/3989e920-05df-4b30-9ec3-e6ecaa436fce.jpg?1630616385", 
        "https://cards.scryfall.io/normal/front/3/9/39c431d7-d94b-46c4-bb89-f3db56214ab4.jpg?1592517191",
        "https://cards.scryfall.io/normal/front/4/c/4ced112a-e775-4f97-97b3-74877e9dce12.jpg?1626096503", 
        "https://cards.scryfall.io/normal/front/6/f/6f4bcadd-7eff-4294-94d5-52482a734d5b.jpg?1576382268",
        "https://cards.scryfall.io/normal/front/4/d/4da9e7d8-5f01-4d55-a0a8-afe5e7d5f8e4.jpg?1593815080", 
        "https://cards.scryfall.io/normal/front/6/2/629e37d1-c0f3-44f2-926e-41eb3687c1d9.jpg?1576384293",
        "https://cards.scryfall.io/normal/front/8/e/8ecc97f2-0d24-4ea7-b10e-26b61357711d.jpg?1682209507", 
        "https://cards.scryfall.io/normal/front/d/8/d80100c3-c81e-4084-8dfe-f8610637fd91.jpg?1654567106",
        "https://cards.scryfall.io/normal/front/1/1/1132218d-56cd-441e-9006-df3c50344491.jpg?1562701264", 
        "https://cards.scryfall.io/normal/front/8/5/854f1d22-1416-4012-979c-35152ff520bd.jpg?1580014975",
        "https://cards.scryfall.io/normal/front/1/f/1f44b96a-8498-414a-a4ac-54c80dfa9f23.jpg?1594735262", 
        "https://cards.scryfall.io/normal/front/8/9/89a698a5-f4ac-4b04-96dc-32e1eeef6ac7.jpg?1654567031",
        "https://cards.scryfall.io/normal/front/b/9/b91dadcb-31e9-43b0-b425-c9311af3e9d7.jpg?1599708272", 
        "https://cards.scryfall.io/normal/front/8/d/8d8e6941-ad6e-4d2f-93c0-be79e75bdf06.jpg?1634349628",
        "https://cards.scryfall.io/normal/front/6/0/60b565da-a49b-479c-b0c4-8ff3dd20cc0b.jpg?1675956933", 
        "https://cards.scryfall.io/normal/front/2/7/275d6137-5eff-4e82-8232-64e8679bc11c.jpg?1674141505",
        "https://cards.scryfall.io/normal/front/3/7/37f6200d-caaf-49ca-b021-48186e404ace.jpg?1641602647", 
        "https://cards.scryfall.io/normal/front/c/c/cce0561d-252a-499f-bfa0-9de59e4ea5ba.jpg?1591320908",
        "https://cards.scryfall.io/normal/front/8/4/847a175e-ead1-4596-baf3-5f7f57859e0b.jpg?1674421689", 
        "https://cards.scryfall.io/normal/front/b/3/b3c185b9-5d97-4a5a-af0b-8b9c44dcd235.jpg?1592516807",
        "https://cards.scryfall.io/normal/front/6/9/6911759c-7177-402c-a95a-f9f46efaf521.jpg?1594735224", 
        "https://cards.scryfall.io/normal/front/2/9/29425426-7bf2-4872-aa35-c12c22801edd.jpg?1592516712",
        "https://cards.scryfall.io/normal/front/f/0/f0fa1946-4f97-4c52-b5f2-b80571230616.jpg?1562618190", 
        "https://cards.scryfall.io/normal/front/c/e/ceb5d4c4-d6b5-4d28-8ed7-e367c6201f24.jpg?1677543926",
        "https://cards.scryfall.io/normal/front/f/f/ffd0a827-778b-48c3-bb85-4b4acef351d6.jpg?1627706624", 
        "https://cards.scryfall.io/normal/front/9/f/9f44a15c-1bb4-4fb8-88a0-e4d3f2dee1b4.jpg?1626098705",
        "https://cards.scryfall.io/normal/front/f/a/fa125071-ced8-4ccc-bbff-a2cbff13b9d2.jpg?1592673034", 
        "https://cards.scryfall.io/normal/front/3/c/3c844ed7-8ed2-4a39-9134-e14e476ab0c4.jpg?1562816923",
        "https://cards.scryfall.io/normal/front/c/8/c84d5344-2d15-43da-b536-27e0d308606b.jpg?1562793006", 
        "https://cards.scryfall.io/normal/front/e/c/ec2120ff-a6d4-4192-96c0-33c139155ddf.jpg?1592762531",
        "https://cards.scryfall.io/normal/front/2/8/28d10cf2-c40d-4748-add0-f9cdd606030c.jpg?1592710986", 
        "https://cards.scryfall.io/normal/front/5/d/5d33a5b7-797b-4079-8d62-edd124c0fb5a.jpg?1654567784",
        "https://cards.scryfall.io/normal/front/6/5/65008352-bc7e-40b2-a832-b46813e5dc4c.jpg?1634060553", 
        "https://cards.scryfall.io/normal/front/9/7/97685645-43ab-4dd3-926a-f7439d7a31e6.jpg?1675347766",
        "https://cards.scryfall.io/normal/front/9/a/9a539a23-8383-4525-82dd-acfe1d219fe9.jpg?1572490099", 
        "https://cards.scryfall.io/normal/front/e/c/ec1b3fd1-952a-4bc6-9b31-bd9bd13072f5.jpg?1643586463",
        "https://cards.scryfall.io/normal/front/d/1/d1b032e3-14e3-48ba-ab8a-d2b4f8d31a7d.jpg?1675957177", 
        "https://cards.scryfall.io/normal/front/b/4/b47f639e-4635-4c26-bb2a-4925f0582c21.jpg?1561842572",
        "https://cards.scryfall.io/normal/front/9/f/9f23cfb7-c6b6-4f04-abba-5b2a6117ea12.jpg?1627708063", 
        "https://cards.scryfall.io/normal/front/d/f/df99f770-2c39-4025-a8a2-a5890f61eb53.jpg?1594736416",
        "https://cards.scryfall.io/normal/front/1/1/112077b8-1514-4320-a70f-b23f3c7ce18a.jpg?1604194520", 
        "https://cards.scryfall.io/normal/front/5/7/57948c65-4324-42bc-97ae-7cc700eb3817.jpg?1580014812",
        "https://cards.scryfall.io/normal/front/1/a/1a6c19cc-6469-4958-a547-1d0fe97c70e8.jpg?1599707680", 
        "https://cards.scryfall.io/normal/front/b/e/be065962-f2ed-4ab9-be6b-bfc66d63ff4e.jpg?1562614362",
        "https://cards.scryfall.io/normal/front/4/2/42391fa7-6172-487c-b8aa-d41ab7c64973.jpg?1576384180", 
        "https://cards.scryfall.io/normal/front/7/5/75754468-2850-42e6-ab22-61ff7b9d1214.jpg?1572489685",
        "https://cards.scryfall.io/normal/front/a/a/aa409269-3698-42a2-8c51-75557b27a6f6.jpg?1664653410", 
        "https://cards.scryfall.io/normal/front/1/f/1f5d274c-3a03-4f0d-97e8-7eef6508105d.jpg?1673307496",
        "https://cards.scryfall.io/normal/front/f/6/f63d54c1-1b20-48c4-871d-0bb15e608996.jpg?1562481294", 
        "https://cards.scryfall.io/normal/front/4/2/425f5d1b-9989-4fd1-88e2-6c3108aefa0b.jpg?1562828431",
        "https://cards.scryfall.io/normal/front/5/6/5664e121-d3f1-4ff5-9576-ef515e22bde7.jpg?1619403694", 
        "https://cards.scryfall.io/normal/front/e/8/e8b99739-f4b1-4ad1-bc99-d125d4a7fd28.jpg?1668112760",
        "https://cards.scryfall.io/normal/front/4/6/46ff0b33-d153-4b0e-ac48-7e5ed70dea09.jpg?1594737329", 
        "https://cards.scryfall.io/normal/front/2/a/2a4b6ced-e8d3-47e9-bd27-3e0cb644afe4.jpg?1592652364",
        "https://cards.scryfall.io/normal/front/c/1/c145b06b-45b0-4133-b88d-9cb130aeeeb5.jpg?1682560355", 
        "https://cards.scryfall.io/normal/front/c/5/c52d66db-5570-48a1-99cf-e0417517747b.jpg?1636491502",
        "https://cards.scryfall.io/normal/front/7/2/72101d5f-f3a4-4490-a6f5-c320f3aeb242.jpg?1673309186", 
        "https://cards.scryfall.io/normal/front/a/c/aca704d5-b6e0-4726-8856-0b3a6732bbd8.jpg?1562935793",
        "https://cards.scryfall.io/normal/front/4/6/4676c019-886c-4b0d-9849-c044c0e03da3.jpg?1682209026", 
        "https://cards.scryfall.io/normal/front/9/5/954d53f3-ebbe-48e0-9e1a-7019d2b0740c.jpg?1576384454",
        "https://cards.scryfall.io/normal/front/6/1/61d23407-9fe0-4cbf-b4b5-bc1e132c36e4.jpg?1664410193", 
        "https://cards.scryfall.io/normal/front/e/8/e8233004-6d69-44a7-bf21-f13a5e146a1f.jpg?1674267825",
        "https://cards.scryfall.io/normal/front/9/b/9b848caa-aad8-4060-8f86-304a8556de2d.jpg?1562927810", 
        "https://cards.scryfall.io/normal/front/8/7/878c7d8c-4df0-43ac-8197-d89c8be5e70d.jpg?1562802262",
        "https://cards.scryfall.io/normal/front/c/3/c38dfb08-ab41-4759-9967-b5a25f18518a.jpg?1561844969", 
        "https://cards.scryfall.io/normal/front/4/e/4e532309-5cf9-4d12-b673-f9baad30b800.jpg?1562286827",
        "https://cards.scryfall.io/normal/front/5/6/56d86909-b7f3-4a46-9904-e173853b79f1.jpg?1584829977", 
        "https://cards.scryfall.io/normal/front/f/5/f50583b8-6953-4094-b420-580d545e827f.jpg?1562944330",
        "https://cards.scryfall.io/normal/front/4/a/4acaf396-f950-42da-85ab-149ffb31fee6.jpg?1627704845", 
        "https://cards.scryfall.io/normal/front/0/b/0b81f82a-f004-44f3-9dad-1675941fe57b.jpg?1591319654",
        "https://cards.scryfall.io/normal/front/7/4/7450c7d6-4c09-4264-a711-b956f62f4d0e.jpg?1575842105", 
        "https://cards.scryfall.io/normal/front/d/f/dfb81cb1-ac56-4803-a962-359854a447df.jpg?1675957012",
        "https://cards.scryfall.io/normal/front/6/a/6afead32-3542-44c4-82d6-b6a81beb9f90.jpg?1600713424", 
        "https://cards.scryfall.io/normal/front/6/a/6a1c710b-bd67-4174-ab02-6ae98a7575ac.jpg?1584830612",
        "https://cards.scryfall.io/normal/front/8/9/89a18961-8f0b-4e98-9de4-aba97e91ad9a.jpg?1654567795", 
        "https://cards.scryfall.io/normal/front/6/3/63005c92-fc0b-45dc-b488-489350527453.jpg?1592713834",
        "https://cards.scryfall.io/normal/front/6/d/6d653a1d-d355-464e-82aa-92028296b7ef.jpg?1641603175", 
        "https://cards.scryfall.io/normal/front/e/4/e4a5b2b8-3890-485f-8731-8f178a2da3d7.jpg?1561850218",
        "https://cards.scryfall.io/normal/front/0/f/0fc51899-3970-416b-b7de-fadbc9678955.jpg?1562782718", 
        "https://cards.scryfall.io/normal/front/f/e/fed77513-94ab-44e2-b9a1-30ba927cd6ee.jpg?1673307051",
        "https://cards.scryfall.io/normal/front/f/2/f2291b66-8a3f-42a5-8494-09ecee64ed34.jpg?1592754356", 
        "https://cards.scryfall.io/normal/front/a/7/a743a3b6-3278-4644-a2d5-acf495c273ed.jpg?1634350603",
        "https://cards.scryfall.io/normal/front/4/3/43502078-5349-4e29-8e7d-277654a9a71e.jpg?1562877073", 
        "https://cards.scryfall.io/normal/front/5/1/5198ac65-118c-4616-8315-d71d41b883ad.jpg?1626098012",
        "https://cards.scryfall.io/normal/front/2/7/2796424c-f6c5-4851-87fb-145a58fe1f60.jpg?1562841672", 
        "https://cards.scryfall.io/normal/front/f/6/f61ea59a-1db0-4e6b-bcde-19787c76a49b.jpg?1562946915",
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