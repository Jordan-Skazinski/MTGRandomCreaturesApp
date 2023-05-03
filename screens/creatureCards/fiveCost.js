import { Text, View, Image } from "react-native";
import { globalStyles } from "../../globalStyles";

export default function FiveCost({navigator}) {
    const cards = [
        "https://cards.scryfall.io/normal/front/7/c/7c1a7dd8-8034-4f59-a351-33666b26ff5a.jpg?1581479807", 
        "https://cards.scryfall.io/normal/front/3/f/3f5bee0f-ebc8-4f41-91ee-4eed104ad980.jpg?1610161744",
        "https://cards.scryfall.io/normal/front/0/3/03f16bbd-00d6-43ed-9a11-ebe7fc65933a.jpg?1682209239", 
        "https://cards.scryfall.io/normal/front/e/0/e0fed1e5-fcbd-4597-91b5-ba809571573b.jpg?1673147377",
        "https://cards.scryfall.io/normal/front/c/6/c672b34d-066e-40e6-a499-3ab68ea6514c.jpg?1651655915", 
        "https://cards.scryfall.io/normal/front/9/d/9d914868-9000-4df2-a818-0ef8a7f636ae.jpg?1665343456",
        "https://cards.scryfall.io/normal/front/f/5/f550f0dd-9e20-4faf-a374-9d1c5830a52f.jpg?1641601382", 
        "https://cards.scryfall.io/normal/front/4/3/432ecd5f-966f-4403-a973-51e175a524a0.jpg?1594736810",
        "https://cards.scryfall.io/normal/front/7/8/783a4620-3054-4f31-b2ac-e3272197c291.jpg?1682210154", 
        "https://cards.scryfall.io/normal/front/9/3/93657aaa-7a0f-49ad-b026-6f79b3bd6768.jpg?1665822988",
        "https://cards.scryfall.io/normal/front/1/8/18a2bdc8-b705-4eb5-b3a5-ff2e2ab8f312.jpg?1626663778", 
        "https://cards.scryfall.io/normal/front/a/2/a2ff0ee3-9600-4c7d-acec-6ec90595384e.jpg?1562852476",
        "https://cards.scryfall.io/normal/front/f/b/fbe5d85f-bfd3-49e1-a943-ed1ade6bb2a2.jpg?1562945824", 
        "https://cards.scryfall.io/normal/front/9/e/9eb08e11-c247-404c-9f40-a12cb7087d0c.jpg?1568003598",
        "https://cards.scryfall.io/normal/front/7/4/74943390-d25f-47cb-90bb-cbf70c87f4a2.jpg?1604198513", 
        "https://cards.scryfall.io/normal/front/1/8/18e3ebe5-9350-4781-a30d-4fcad034e7a9.jpg?1631586826",
        "https://cards.scryfall.io/normal/front/a/1/a1480f99-83f8-48e7-ba52-9a3f3a9a24f3.jpg?1674141892", 
        "https://cards.scryfall.io/normal/front/2/1/21f6d49f-1577-4d17-a633-0c282769728a.jpg?1626100668",
        "https://cards.scryfall.io/normal/front/1/4/14dc88ee-bba9-4625-af0d-89f3762a0ead.jpg?1631048621", 
        "https://cards.scryfall.io/normal/front/6/e/6ea5dbba-6114-4d97-9363-817ab9e896d3.jpg?1562788006",
        "https://cards.scryfall.io/normal/front/e/6/e6bd7225-b39f-4b3b-8c36-dbc2c09f6e50.jpg?1631587429", 
        "https://cards.scryfall.io/normal/front/5/3/53b4dcd6-b1b6-4f1c-9264-e58bdc87399b.jpg?1673147099",
        "https://cards.scryfall.io/normal/front/a/1/a159830a-698f-423c-9da0-a734b210ecab.jpg?1555040748", 
        "https://cards.scryfall.io/normal/front/9/0/9033cf27-d9e6-49b8-8ee1-c1f38c9680b9.jpg?1654567204",
        "https://cards.scryfall.io/normal/front/9/3/93970fae-19f7-41dd-9750-ca428ae1de7a.jpg?1674142149", 
        "https://cards.scryfall.io/normal/front/3/1/3184b138-1109-4195-9d96-4f190164e98b.jpg?1593092838",
        "https://cards.scryfall.io/normal/front/5/7/5790dd89-2be5-4a77-9450-2d3c1422bfc9.jpg?1576385351", 
        "https://cards.scryfall.io/normal/front/4/6/464dbaf6-8430-45af-b982-9099e6c6e8a7.jpg?1674142416",
        "https://cards.scryfall.io/normal/front/1/5/15c34447-b0f4-4fcc-b557-23c92850b31b.jpg?1598303082", 
        "https://cards.scryfall.io/normal/front/0/8/0896860c-d028-4193-89a5-97e05c12a1e7.jpg?1673307655",
        "https://cards.scryfall.io/normal/front/c/7/c768267f-5ad2-4f4d-bbc7-6639325401c7.jpg?1599709400", 
        "https://cards.scryfall.io/normal/front/5/3/532fca6b-f788-43f8-b29f-7273e7a48449.jpg?1636684609",
        "https://cards.scryfall.io/normal/front/5/f/5ffd5cb7-7002-4c9e-b04f-6ee6d168afc3.jpg?1592765099", 
        "https://cards.scryfall.io/normal/front/8/c/8cd5cc66-2ade-4142-9269-7d9905b029e5.jpg?1625190905",
        "https://cards.scryfall.io/normal/front/d/f/df3784d4-80cd-4f78-afb3-d61f3bab5b2c.jpg?1593813632", 
        "https://cards.scryfall.io/normal/front/4/a/4a8b26dc-de39-4510-9fcf-6cb43372f543.jpg?1598303851",
        "https://cards.scryfall.io/normal/front/7/2/729f662d-e6b3-41ae-aed8-ef1c27b793d9.jpg?1631586703", 
        "https://cards.scryfall.io/normal/front/2/b/2bd9d26e-984c-4cf8-8c46-447f9776668f.jpg?1591321337",
        "https://cards.scryfall.io/normal/front/e/d/ed9110d1-508f-4c87-a49e-6ec00039d924.jpg?1673485053", 
        "https://cards.scryfall.io/normal/front/c/3/c3f7faed-de6b-404f-b54f-e60d5b55485b.jpg?1592673086",
        "https://cards.scryfall.io/normal/front/4/c/4ce569cd-964e-44d6-a155-5a853ccc1478.jpg?1674142054", 
        "https://cards.scryfall.io/normal/front/7/7/775480ed-f574-40cb-bd9b-21102eaaff63.jpg?1674136654",
        "https://cards.scryfall.io/normal/front/0/e/0ec85db7-c8ec-4730-b692-c140977436aa.jpg?1592765539", 
        "https://cards.scryfall.io/normal/front/5/4/54231832-d492-4812-b658-4ab9a30fefe2.jpg?1562799464",
        "https://cards.scryfall.io/normal/front/1/d/1d21ae20-2ef5-4dc0-aced-97497e6a8025.jpg?1682209560", 
        "https://cards.scryfall.io/normal/front/d/a/da6b530c-5a56-4dc1-8d36-6ed8d2c158a9.jpg?1682208635",
        "https://cards.scryfall.io/normal/front/2/f/2f64ae7d-0bd0-41f8-8f7d-64db4bd2a10b.jpg?1631588432", 
        "https://cards.scryfall.io/normal/front/b/e/be8ec9e1-2c8e-496d-9111-4d453b75b578.jpg?1559959372",
        "https://cards.scryfall.io/normal/front/9/f/9f5bb319-29b2-4a7c-82e9-f8b5e47909a1.jpg?1674136563", 
        "https://cards.scryfall.io/normal/front/d/7/d79ee141-0ea6-45d6-a682-96a37d703394.jpg?1599708320",
        "https://cards.scryfall.io/normal/front/1/6/16677645-f635-4183-8afc-056520b94122.jpg?1673149008", 
        "https://cards.scryfall.io/normal/front/3/3/33176679-d571-47a1-ae05-bed9b748491d.jpg?1543675179",
        "https://cards.scryfall.io/normal/front/c/0/c0109b60-09aa-4a03-92e7-0c651d976d51.jpg?1559959377", 
        "https://cards.scryfall.io/normal/front/e/7/e7fb8520-1bc4-40e7-a4cc-2933ed7e0c00.jpg?1599708195",
        "https://cards.scryfall.io/normal/front/7/8/78fb8900-d28d-4e33-96a7-66fcbc117adf.jpg?1634348984", 
        "https://cards.scryfall.io/normal/front/c/c/cc3707f1-ed9d-412e-a7be-b6d8b554bd6c.jpg?1665822506",
        "https://cards.scryfall.io/normal/front/a/7/a7fa6901-e74f-448c-9d26-99a692092512.jpg?1568003468", 
        "https://cards.scryfall.io/normal/front/0/7/0782e090-209c-428f-966a-17f3ceab2903.jpg?1572893891",
        "https://cards.scryfall.io/normal/front/4/4/44dcab01-1d13-4dfc-ae2f-fbaa3dd35087.jpg?1675956896", 
        "https://cards.scryfall.io/normal/front/9/8/9897074a-0ac4-4d1a-9aac-e77830cc5c78.jpg?1604195368",
        "https://cards.scryfall.io/normal/front/7/7/779e3944-4342-4151-9963-87e8d41fd2ff.jpg?1680135257", 
        "https://cards.scryfall.io/normal/front/3/e/3e7d8c13-bfab-4501-8773-64adbfeb0957.jpg?1604194171",
        "https://cards.scryfall.io/normal/front/d/5/d51269cf-a333-4a64-94cd-245798d840d2.jpg?1594736944", 
        "https://cards.scryfall.io/normal/front/e/0/e0d0527b-bb28-4986-9843-040d06bd9def.jpg?1608910343",
        "https://cards.scryfall.io/normal/front/c/8/c8e4c609-19c9-433b-a852-7999e375ee4f.jpg?1591605359", 
        "https://cards.scryfall.io/normal/front/d/1/d148e1f1-82fd-44ee-ace4-937f2a638329.jpg?1562709963",
        "https://cards.scryfall.io/normal/front/9/2/92ea1575-eb64-43b5-b604-c6e23054f228.jpg?1571197150", 
        "https://cards.scryfall.io/normal/front/6/5/65fd8dba-0aca-4b47-9b4b-19d5c77cf8f3.jpg?1674141777",
        "https://cards.scryfall.io/normal/front/d/f/df70f155-2336-421c-8a9d-69772d2b51a8.jpg?1559959340", 
        "https://cards.scryfall.io/normal/front/d/a/dafeafa0-b937-4387-8626-449a810486b4.jpg?1568004576",
        "https://cards.scryfall.io/normal/front/4/b/4b9a5878-985d-47ba-a3dd-fe897777b873.jpg?1651656002", 
        "https://cards.scryfall.io/normal/front/4/7/47a6234f-309f-4e03-9263-66da48b57153.jpg?1626094105",
        "https://cards.scryfall.io/normal/front/8/6/86f6f3e9-b594-49da-b0af-75a672590da1.jpg?1682209185", 
        "https://cards.scryfall.io/normal/front/9/7/978c2c7d-6898-4be2-aed7-e673210ce654.jpg?1674142741",
        "https://cards.scryfall.io/normal/front/0/a/0a11ee0d-ff8d-4648-8b4e-29440c135c30.jpg?1572892944", 
        "https://cards.scryfall.io/normal/front/4/0/408a2073-d068-44bc-b596-5a3a3a446ee1.jpg?1581479797",
        "https://cards.scryfall.io/normal/front/0/e/0eb444f0-69cc-47c8-8cd6-1f9edad5d903.jpg?1559959431", 
        "https://cards.scryfall.io/normal/front/d/a/da46b47b-0156-4a01-b4b1-28526a6826f4.jpg?1636287930",
        "https://cards.scryfall.io/normal/front/9/3/93be6799-7b9d-44d4-84dc-2961692b5a85.jpg?1562739679", 
        "https://cards.scryfall.io/normal/front/f/4/f484f19a-0121-4173-a70b-6698cc5f6303.jpg?1632261791",
        "https://cards.scryfall.io/normal/front/4/2/4238b089-c6d8-4e4b-b6a1-a0f89e3b4968.jpg?1581479609", 
        "https://cards.scryfall.io/normal/front/c/a/cab61c7e-e00a-413b-a0b5-7718b479582f.jpg?1599705958",
        "https://cards.scryfall.io/normal/front/0/e/0efda05d-01ea-4478-b075-00a31d7037f8.jpg?1599710515", 
        "https://cards.scryfall.io/normal/front/a/3/a32be366-d86e-48aa-8257-ca8afb87ba18.jpg?1674141462",
        "https://cards.scryfall.io/normal/front/5/6/56c1227e-bea7-47cb-bbec-389a3d585af5.jpg?1680739383", 
        "https://cards.scryfall.io/normal/front/2/7/27427233-da58-45af-ade8-e0727929efaa.jpg?1593096427",
        "https://cards.scryfall.io/normal/front/0/6/06b25752-26be-4189-bc8b-828db6f0e612.jpg?1654568249", 
        "https://cards.scryfall.io/normal/front/a/c/acd207de-eec3-4d82-b8b9-b1e60a7bad12.jpg?1674136879",
        "https://cards.scryfall.io/normal/front/2/2/2255d1e4-f387-4187-8c10-7d0009f6ec79.jpg?1674137687", 
        "https://cards.scryfall.io/normal/front/b/9/b91ceead-5071-43e8-bf90-f379d683acdf.jpg?1641602675",
        "https://cards.scryfall.io/normal/front/6/a/6a2e1d4a-8df4-472f-a98f-d6b71c1dd1c4.jpg?1561945378", 
        "https://cards.scryfall.io/normal/front/7/5/75d15e8c-1c5a-4aaf-92a5-5d4f500def06.jpg?1625191262",
        "https://cards.scryfall.io/normal/front/2/5/25266b22-3cee-4ac8-91e8-5a23fbaa457a.jpg?1673148945", 
        "https://cards.scryfall.io/normal/front/6/e/6e67802e-e0d9-4989-b1c2-77ef2ff69796.jpg?1637628135",
        "https://cards.scryfall.io/normal/front/a/f/af3af5c4-0960-44a2-976e-abdf7803c436.jpg?1582178876", 
        "https://cards.scryfall.io/normal/front/8/a/8afceb13-877a-4256-9ba6-851b6924ffd9.jpg?1608911148",
        "https://cards.scryfall.io/normal/front/f/d/fd2fc2d4-c4fb-4dcb-93fa-aaf8c1182f15.jpg?1674185810", 
        "https://cards.scryfall.io/normal/front/a/9/a97b9d0e-e150-46d5-b6fd-59793e82dae4.jpg?1562266137",
        "https://cards.scryfall.io/normal/front/e/8/e8efe72d-3c01-4dd6-b3dd-0382ac09dc52.jpg?1673305671", 
        "https://cards.scryfall.io/normal/front/3/0/30c3d4c1-dc3d-4529-9d6e-8c16149cf6da.jpg?1576384090",
        "https://cards.scryfall.io/normal/front/2/7/275426c4-c14e-47d0-a9d4-24da7f6f6911.jpg?1665402560", 
        "https://cards.scryfall.io/normal/front/7/8/786ae686-0790-4ba1-927f-523984331549.jpg?1608909123",
        "https://cards.scryfall.io/normal/front/0/1/01c2337d-1c3c-4c5e-8b06-dc8a8c56164e.jpg?1673305427", 
        "https://cards.scryfall.io/normal/front/3/3/332153ab-1b8e-40a8-b0b4-01f94866d368.jpg?1625192204",
        "https://cards.scryfall.io/normal/front/a/6/a6cb10f5-ee9f-49e6-826a-a2a2395daa92.jpg?1674141401", 
        "https://cards.scryfall.io/normal/front/2/4/24961417-0a22-4eb3-8b90-e26cd2b738ba.jpg?1641602464",
        "https://cards.scryfall.io/normal/front/1/8/18f7c44c-a21f-4b61-8f08-122a75accb00.jpg?1637629203", 
        "https://cards.scryfall.io/normal/front/8/a/8a065808-643e-4123-a1ae-f65d62223106.jpg?1566819876",
        "https://cards.scryfall.io/normal/front/b/9/b987664f-0b74-4c0a-b306-14767a55559a.jpg?1675182563", 
        "https://cards.scryfall.io/normal/front/8/f/8fc5e4a8-ea7b-4803-a7ed-3b915708661f.jpg?1619394801",
        "https://cards.scryfall.io/normal/front/4/b/4bdc8f60-fa67-4dd6-94af-8250eb7f7141.jpg?1674137862", 
        "https://cards.scryfall.io/normal/front/6/0/60b9db96-a6ab-454b-99a7-910ef77560d7.jpg?1668725069",
        "https://cards.scryfall.io/normal/front/3/7/3714a135-e2b9-43a7-a2a2-fa5a2e0ac61a.jpg?1557576478", 
        "https://cards.scryfall.io/normal/front/c/d/cd349f95-3eae-4ef2-abf8-e911bb8e93e5.jpg?1543674734",
        "https://cards.scryfall.io/normal/front/4/b/4bd3014b-94bb-4a9f-92cf-239a2dcc7e97.jpg?1594734758", 
        "https://cards.scryfall.io/normal/front/8/3/83f43730-1c1f-4150-8771-d901c54bedc4.jpg?1571282906",
        "https://cards.scryfall.io/normal/front/4/7/474d6363-ebe1-4a1a-b4e6-7bd53d878527.jpg?1608911242", 
        "https://cards.scryfall.io/normal/front/b/8/b8630ae1-8fe9-4d6e-899b-a28d86d4d729.jpg?1641602275",
        "https://cards.scryfall.io/normal/front/e/5/e5769888-78e0-4d06-b6b6-b4602f7cd462.jpg?1562855145", 
        "https://cards.scryfall.io/normal/front/0/a/0ad06ad7-0545-4c6f-9b10-4a27fa2e827c.jpg?1562599546",
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