import { Text, View, Image } from "react-native";
import { globalStyles } from "../../globalStyles";

export default function EightCost({navigator}) {
    const cards = [
        "https://cards.scryfall.io/normal/front/4/4/44afd414-cc69-4888-ba12-7ea87e60b1f7.jpg?1601079153", 
        "https://cards.scryfall.io/normal/front/e/c/ecdf2bd9-87b9-470a-ad2e-0ebf98560f87.jpg?1592516819",
        "https://cards.scryfall.io/normal/front/a/0/a0519776-3d86-4f7d-9c3b-71c1dfbf7e12.jpg?1598303166", 
        "https://cards.scryfall.io/normal/front/6/3/63195796-197e-47ec-85f0-d4ec0065f6e6.jpg?1625977325",
        "https://cards.scryfall.io/normal/front/4/7/47a74813-6d8b-4b11-8a5e-5b83d2d98c34.jpg?1674142250", 
        "https://cards.scryfall.io/normal/front/3/3/33f6914d-808f-4502-a87a-70912d7ae6e8.jpg?1562604627",
        "https://cards.scryfall.io/normal/front/e/1/e14adff9-33cc-467e-b782-068854c5e7b7.jpg?1562817745", 
        "https://cards.scryfall.io/normal/front/9/f/9fe3af8c-109d-486c-aa34-3f023abda5b7.jpg?1562852459",
        "https://cards.scryfall.io/normal/front/7/7/77bcb902-70c0-4406-bbcf-49d23fd71a68.jpg?1673305138", 
        "https://cards.scryfall.io/normal/front/1/b/1be9d9a4-d7ee-4854-abc2-85cabf993ec9.jpg?1626095274",
        "https://cards.scryfall.io/normal/front/c/e/ced18935-4ce9-466e-a88d-2b14ff8f989f.jpg?1674135398", 
        "https://cards.scryfall.io/normal/front/9/9/996bb4c0-dc72-4233-9f44-2e25aef71ad7.jpg?1608912195",
        "https://cards.scryfall.io/normal/front/e/6/e68b70a6-a150-4d81-921c-9b178fe0037d.jpg?1608909485", 
        "https://cards.scryfall.io/normal/front/9/8/98aeab2a-69b5-4b4f-9de4-5401d01c26e2.jpg?1562923340",
        "https://cards.scryfall.io/normal/front/4/c/4c3560ae-b1f6-4269-a9eb-1a45247b6232.jpg?1608910749", 
        "https://cards.scryfall.io/normal/front/3/1/3145ca68-7a9d-4161-9456-518591251b56.jpg?1593092414",
        "https://cards.scryfall.io/normal/front/b/f/bf1ef8ec-d915-41f2-b087-3d6d82e3db85.jpg?1591319833", 
        "https://cards.scryfall.io/normal/front/9/7/97914abe-71d5-4bd6-87d7-8e7379abf1aa.jpg?1673484894",
        "https://cards.scryfall.io/normal/front/c/e/cebf2c16-bd9d-4a8f-a1b6-6e0c393178bc.jpg?1608912178", 
        "https://cards.scryfall.io/normal/front/6/7/670fbc63-4c9b-4e57-b53e-4ca4d7a224ba.jpg?1674140837",
        "https://cards.scryfall.io/normal/front/7/3/7335e500-342d-476d-975c-817512e6e3d6.jpg?1562558022", 
        "https://cards.scryfall.io/normal/front/1/1/11d8b7ac-fb65-4496-9d9f-184fa8ad8012.jpg?1562898584",
        "https://cards.scryfall.io/normal/front/7/8/784e843e-7010-466d-adbd-1dd1595aead1.jpg?1562923386", 
        "https://cards.scryfall.io/normal/front/1/d/1d972f97-1945-440b-8bd3-63038db22257.jpg?1562732288",
        "https://cards.scryfall.io/normal/front/7/e/7e8e34de-4b0a-48fe-bb13-c7e181d37e6c.jpg?1562274562", 
        "https://cards.scryfall.io/normal/front/9/a/9a7c2716-35ab-411d-8456-267e09833358.jpg?1562926191",
        "https://cards.scryfall.io/normal/front/f/8/f8965a3a-93fe-4021-a665-b6013bdc86f7.jpg?1555040728", 
        "https://cards.scryfall.io/normal/front/1/f/1f2054d9-d10f-4127-aece-71c3f0ef547c.jpg?1673148296",
        "https://cards.scryfall.io/normal/front/2/2/22dd2242-2fd8-4752-886c-fc6dbabcf89a.jpg?1631586933", 
        "https://cards.scryfall.io/normal/front/7/4/7434abe4-87eb-4709-a26d-4e23154b4d31.jpg?1562558098",
        "https://cards.scryfall.io/normal/front/4/b/4b063dfd-5a80-48c9-8f7b-48d21a129a76.jpg?1608909132", 
        "https://cards.scryfall.io/normal/front/7/1/71b03143-9e85-4061-88e6-ad621f75ec3b.jpg?1547518515",
        "https://cards.scryfall.io/normal/front/6/7/67a87278-4c82-4056-8354-253d86b0ef3d.jpg?1674421950", 
        "https://cards.scryfall.io/normal/front/6/e/6e82d946-1efb-4253-84ab-93c88d2d1d84.jpg?1626098606",
        "https://cards.scryfall.io/normal/front/0/9/09fb3b1f-c3a0-4da4-9b29-eff81fc1d562.jpg?1625978355", 
        "https://cards.scryfall.io/normal/front/d/7/d7148d24-373e-4485-860b-c3429c2337f2.jpg?1624593477",
        "https://cards.scryfall.io/normal/front/3/e/3e394ffe-7460-4c59-a403-e9404b0d10c1.jpg?1562817037", 
        "https://cards.scryfall.io/normal/front/f/3/f32bd753-1677-49ef-8717-27276bd44f38.jpg?1561964455",
        "https://cards.scryfall.io/normal/front/4/c/4cffed4c-4e2b-414a-9b20-90ce21b47d16.jpg?1610074944", 
        "https://cards.scryfall.io/normal/front/a/1/a1523cda-c47d-4419-a5d3-fd6ed9867c56.jpg?1591227023",
        "https://cards.scryfall.io/normal/front/0/5/058eb32f-2ae2-4276-ae1a-242bbb150418.jpg?1562229264", 
        "https://cards.scryfall.io/normal/front/4/6/4670d196-9cd9-47b1-b3c6-f78fe0422707.jpg?1562397943",
        "https://cards.scryfall.io/normal/front/8/c/8c21655e-fda4-4852-a801-c5593644044a.jpg?1619396626", 
        "https://cards.scryfall.io/normal/front/6/2/6200ac79-b166-43d0-9a0b-5b547625ed57.jpg?1673148837",
        "https://cards.scryfall.io/normal/front/3/e/3e0de032-a107-4095-b475-28f3f13b2c6e.jpg?1592672692", 
        "https://cards.scryfall.io/normal/front/b/c/bc420f2c-09fa-4f90-a1c3-7d151ecaa8b3.jpg?1674137119",
        "https://cards.scryfall.io/normal/front/7/9/7951ef42-8e14-4920-bf8a-75ab48e8645a.jpg?1674141865", 
        "https://cards.scryfall.io/normal/front/7/3/73cdb22d-90e6-49c4-9ad7-3249d9196ca9.jpg?1673147338",
        "https://cards.scryfall.io/normal/front/7/c/7cd1ace7-d4fe-4f96-9434-7ab1442bf36f.jpg?1598917172", 
        "https://cards.scryfall.io/normal/front/3/1/31142a36-3676-4ce4-9f5b-d9252fc30739.jpg?1651655484",
        "https://cards.scryfall.io/normal/front/3/9/398ecf98-b36b-45e1-8ac1-9d364e12d79e.jpg?1637628289", 
        "https://cards.scryfall.io/normal/front/a/f/afd718b5-040b-4bb7-9f0c-b72373d786d4.jpg?1651655465",
        "https://cards.scryfall.io/normal/front/e/e/ee13d6f1-66bb-433d-9250-f18aa30fa4fc.jpg?1576267333", 
        "https://cards.scryfall.io/normal/front/8/e/8e92ba96-372c-418d-b271-45e1bf5c7af5.jpg?1562438472",
        "https://cards.scryfall.io/normal/front/5/4/54e4017b-51b1-47b0-90a6-47d680bac963.jpg?1562842155", 
        "https://cards.scryfall.io/normal/front/5/b/5b2318e7-250d-4a30-8b45-55d4c1db68e9.jpg?1674137853",
        "https://cards.scryfall.io/normal/front/f/0/f0dea9d0-9f93-460d-bf69-ae1c1172a95e.jpg?1599707346", 
        "https://cards.scryfall.io/normal/front/e/9/e98eb29b-af03-4a96-b84c-a0bd51f80f03.jpg?1562941873",
        "https://cards.scryfall.io/normal/front/8/6/8644c60f-7d06-4026-bcf3-df054701ca0a.jpg?1561834730", 
        "https://cards.scryfall.io/normal/front/5/4/54803ba5-a2d7-4997-8e76-298aff6e1aff.jpg?1651655559",
        "https://cards.scryfall.io/normal/front/8/b/8b64717e-0e7b-4b4c-ba82-48498ee87aad.jpg?1562638021", 
        "https://cards.scryfall.io/normal/front/4/1/416845ec-7efd-464a-a0cb-7e9170ccdd38.jpg?1673147604",
        "https://cards.scryfall.io/normal/front/5/7/57d230fc-d382-40b4-bdbd-5fe880fa16bf.jpg?1624592487", 
        "https://cards.scryfall.io/normal/front/0/6/061d9fa5-a8e0-4263-9804-22d648554eba.jpg?1593095908",
        "https://cards.scryfall.io/normal/front/e/2/e2539ff7-2b7d-47e3-bd77-3138a6c42d2b.jpg?1562710016", 
        "https://cards.scryfall.io/normal/front/3/f/3fa18695-e10f-4dd5-b116-8a9891e58c20.jpg?1651655499",
        "https://cards.scryfall.io/normal/front/1/3/13a295b0-535e-4c2d-879d-62603d1f2f1b.jpg?1562757911", 
        "https://cards.scryfall.io/normal/front/2/1/21e4140e-22b3-479f-a259-0f56ed02b8ad.jpg?1673308813",
        "https://cards.scryfall.io/normal/front/6/4/64eab2ba-ed5e-4757-b42d-c0fc71a96c4c.jpg?1562610809", 
        "https://cards.scryfall.io/normal/front/c/3/c3dba1c4-ee9a-4ea6-bf66-f639d38711cd.jpg?1591319371",
        "https://cards.scryfall.io/normal/front/e/0/e0e73b63-17cc-4dca-abd6-728b74bc37a8.jpg?1675957233", 
        "https://cards.scryfall.io/normal/front/a/4/a413c65e-5965-429b-8c25-11f8b73cba03.jpg?1562933717",
        "https://cards.scryfall.io/normal/front/e/9/e9333564-2792-470e-be73-61f2445e018f.jpg?1673147749", 
        "https://cards.scryfall.io/normal/front/9/f/9fc9b802-3381-4318-a352-d85451aba586.jpg?1580015084",
        "https://cards.scryfall.io/normal/front/6/d/6d6787c4-170a-45b6-8792-af3ea32ef538.jpg?1562877671", 
        "https://cards.scryfall.io/normal/front/3/d/3dff363d-7e9f-4764-a9ee-ec2f23239df6.jpg?1562907900",
        "https://cards.scryfall.io/normal/front/1/b/1b948181-4688-455c-97ae-990d0ec50f1d.jpg?1651655517", 
        "https://cards.scryfall.io/normal/front/5/6/56d6e8a2-d1b0-4aae-95f5-6ecc5718d454.jpg?1562704188",
        "https://cards.scryfall.io/normal/front/9/5/958af4ba-f29e-47ef-995e-3985982c75ad.jpg?1654568875", 
        "https://cards.scryfall.io/normal/front/a/5/a5c748cb-6386-4479-8f4d-248cae98d2b8.jpg?1592713889",
        "https://cards.scryfall.io/normal/front/7/d/7d27a00e-4402-4410-bab7-ccb34a0de72f.jpg?1562705505", 
        "https://cards.scryfall.io/normal/front/b/b/bb04dad2-4561-4cef-9cee-80d6f1a44bee.jpg?1674422073",
        "https://cards.scryfall.io/normal/front/a/0/a0570ba0-2877-46f6-acea-6913f8915d6d.jpg?1562763011", 
        "https://cards.scryfall.io/normal/front/a/f/afee5684-e9ff-4451-b3e9-184c2e83fb36.jpg?1562415456",
        "https://cards.scryfall.io/normal/front/d/9/d99869b4-0bb6-444a-bdc4-5916371c9d29.jpg?1673148735", 
        "https://cards.scryfall.io/normal/front/3/8/386ce3c9-869d-461c-a3de-c8add3786f73.jpg?1682203767",
        "https://cards.scryfall.io/normal/front/1/3/13e2658d-28d7-4e22-ad44-03ab92ff666d.jpg?1562899204", 
        "https://cards.scryfall.io/normal/front/0/8/088f00a5-95b5-4892-9572-9e022b0eb01f.jpg?1581708568",
        "https://cards.scryfall.io/normal/front/5/6/569d1014-e04a-4f8d-a2b2-699b5be08d5d.jpg?1562735516", 
        "https://cards.scryfall.io/normal/front/6/b/6bf8eff8-6b39-4e5e-b8a9-1da53e837809.jpg?1641603546",
        "https://cards.scryfall.io/normal/front/1/c/1c3dd0aa-f6e9-435c-af64-20e9de67efe9.jpg?1576383758", 
        "https://cards.scryfall.io/normal/front/5/2/52e7c608-d224-472b-8736-273874211f24.jpg?1562912268",
        "https://cards.scryfall.io/normal/front/9/8/9883e973-54c3-4bec-91d8-22f2829cdfa2.jpg?1562495122", 
        "https://cards.scryfall.io/normal/front/b/6/b631b71b-78f6-41bc-a26a-c761ee1671a1.jpg?1592713140",
        "https://cards.scryfall.io/normal/front/a/f/af25e35c-d1a4-4c10-8574-82babaaac4fd.jpg?1562707383", 
        "https://cards.scryfall.io/normal/front/f/1/f137e17e-6856-49c5-9878-8c5c8f3c1518.jpg?1592765600",
        "https://cards.scryfall.io/normal/front/b/e/bede410a-8b5c-48c0-8f5d-d8bd17e0b86b.jpg?1562933389", 
        "https://cards.scryfall.io/normal/front/8/b/8b5d1e41-fb0b-4866-912a-2a7d49542428.jpg?1576383709",
        "https://cards.scryfall.io/normal/front/d/2/d214d25b-96c3-4479-88f0-3996805d6e6f.jpg?1598917488", 
        "https://cards.scryfall.io/normal/front/8/7/87e80447-9572-43a7-8487-3249cd9ce596.jpg?1562842621",
        "https://cards.scryfall.io/normal/front/f/4/f4e12f83-eab8-4113-ab63-3f7a830861d4.jpg?1576383639", 
        "https://cards.scryfall.io/normal/front/7/c/7c17e3b5-d609-4289-9b74-5ac96ab4ccfa.jpg?1562924236",
        "https://cards.scryfall.io/normal/front/9/e/9e71046b-1284-4d7f-93dd-a632c74d9cca.jpg?1682208278", 
        "https://cards.scryfall.io/normal/front/2/b/2b2dcafd-eb72-4f3a-9c1c-ba17fe30bf0f.jpg?1561820572",
        "https://cards.scryfall.io/normal/front/d/9/d908d523-1911-4a49-9e3f-ea1b719a8f0b.jpg?1673148579", 
        "https://cards.scryfall.io/normal/front/c/a/ca570876-23b2-4915-a5b9-20f1fa976fab.jpg?1562555122",
        "https://cards.scryfall.io/normal/front/d/9/d90175ae-4109-4845-b3ff-1531fb67a0e1.jpg?1674420736", 
        "https://cards.scryfall.io/normal/front/f/7/f7761ed0-a784-4dfb-ab6c-0f4b9a411cf3.jpg?1674421325",
        "https://cards.scryfall.io/normal/front/b/9/b9cdd08b-7e77-4927-87dd-6e3afffc3ef0.jpg?1562230149", 
        "https://cards.scryfall.io/normal/front/d/0/d0fc130e-57ed-40a7-a9ba-d689e7dc3698.jpg?1562709247",
        "https://cards.scryfall.io/normal/front/0/d/0d51a3f0-2546-43c1-9a92-625997a24e9b.jpg?1592712744", 
        "https://cards.scryfall.io/normal/front/2/f/2feedcf2-c443-4363-80cf-a90579a64342.jpg?1562702512",
        "https://cards.scryfall.io/normal/front/7/8/78f02d59-0786-41c8-940b-4ef6ef01c646.jpg?1620236273", 
        "https://cards.scryfall.io/normal/front/a/c/ac77e867-939e-49fb-ae1a-9c1dd5e54a9a.jpg?1562929777",
        "https://cards.scryfall.io/normal/front/1/9/19577bda-2728-40c8-a262-26051e6c226b.jpg?1562233741", 
        "https://cards.scryfall.io/normal/front/f/6/f6cde2c4-f53d-4b44-b83b-37b12e00c835.jpg?1592713989",
        "https://cards.scryfall.io/normal/front/0/e/0e2ec92b-dab0-4c9e-af7d-0041b22e852f.jpg?1561932165", 
        "https://cards.scryfall.io/normal/front/d/2/d20a0b5a-2a04-4cce-83e4-2d65ef9399df.jpg?1562937212",
        "https://cards.scryfall.io/normal/front/e/8/e85e54f3-012b-460f-a6f9-d0242a174adc.jpg?1562941643", 
        "https://cards.scryfall.io/normal/front/a/1/a13f9a76-3370-4809-88ff-c300bca31c9e.jpg?1576383747",
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