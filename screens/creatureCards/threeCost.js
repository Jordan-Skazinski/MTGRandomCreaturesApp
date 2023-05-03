import { Text, View, Image } from "react-native";
import { globalStyles } from "../../globalStyles";

export default function ThreeCost({navigator}) {
    const cards = [
        "https://cards.scryfall.io/normal/front/7/6/76d7fa2c-4dbc-4e9e-9448-5bf8bbee95d6.jpg?1673148086", 
        "https://cards.scryfall.io/normal/front/1/c/1c4a25f0-2929-4404-9ce5-bcd4715f90a5.jpg?1631235123",
        "https://cards.scryfall.io/normal/front/8/1/81346d8b-8bdb-4c48-9889-865b23bd001e.jpg?1682209969", 
        "https://cards.scryfall.io/normal/front/a/c/acd42ebf-6dee-44cc-a023-a7f9b67cfa2f.jpg?1673484783",
        "https://cards.scryfall.io/normal/front/0/8/086f97e9-8b62-44f3-b467-149c2ac5ca78.jpg?1608909875", 
        "https://cards.scryfall.io/normal/front/f/0/f0ca02f6-964a-427c-8978-17abae3322e1.jpg?1562875742",
        "https://cards.scryfall.io/normal/front/9/3/93f827e8-1cc4-4a15-a4be-2e74323963b9.jpg?1576383206", 
        "https://cards.scryfall.io/normal/front/a/1/a1e048e0-19d2-4076-892d-f8b3104dee37.jpg?1682209630",
        "https://cards.scryfall.io/normal/front/6/d/6d964876-194b-49f1-8e74-cfe9269f2c62.jpg?1584114361", 
        "https://cards.scryfall.io/normal/front/8/8/8870ef0b-cb1f-463b-8509-fece4743d3d4.jpg?1608917511",
        "https://cards.scryfall.io/normal/front/0/b/0b8aff2c-1f7b-4507-b914-53f8c4706b3d.jpg?1596259277", 
        "https://cards.scryfall.io/normal/front/5/c/5c03e00b-034d-4a26-9fc2-f25fc2dfc661.jpg?1631586764",
        "https://cards.scryfall.io/normal/front/0/5/05bd329b-5707-42fc-af1c-084cc604e805.jpg?1626100528", 
        "https://cards.scryfall.io/normal/front/4/6/46eff31d-f460-48f2-aab7-8b9b89cd87fe.jpg?1682209453",
        "https://cards.scryfall.io/normal/front/2/4/245cb567-5d71-49ca-8670-46197ccdac8a.jpg?1673484539", 
        "https://cards.scryfall.io/normal/front/4/4/44657ab1-0a6a-4a5f-9688-86f239083821.jpg?1631048969",
        "https://cards.scryfall.io/normal/front/d/4/d4cf468f-4e9d-4551-a0ed-10bd6a2316ad.jpg?1674141050", 
        "https://cards.scryfall.io/normal/front/5/9/59c2bacd-09e5-403c-b9a2-722fe6d8062e.jpg?1682208516",
        "https://cards.scryfall.io/normal/front/0/f/0fe79ee4-c3f3-4a6b-a967-203ca3b70ee5.jpg?1594736442", 
        "https://cards.scryfall.io/normal/front/7/e/7ed62dc1-4e78-423c-b9d3-def3b7e95c71.jpg?1568004420",
        "https://cards.scryfall.io/normal/front/4/2/42acbf52-b137-44f0-a815-2817fe8d2da2.jpg?1664411677", 
        "https://cards.scryfall.io/normal/front/f/5/f5c19b87-e114-46d4-9f6c-c02e838a08dd.jpg?1674141627",
        "https://cards.scryfall.io/normal/front/d/e/defcc4a3-40e0-4f5d-b23c-6cd6a614abc1.jpg?1625193684", 
        "https://cards.scryfall.io/normal/front/a/0/a03c738c-88d9-4cf6-a650-20ce6e5565bc.jpg?1637630249",
        "https://cards.scryfall.io/normal/front/f/9/f9c55add-d621-4477-95ec-f2b691c0bdae.jpg?1682209923", 
        "https://cards.scryfall.io/normal/front/c/8/c817cf1f-c0fe-49ab-a8e9-1d09b4c15e57.jpg?1673305511",
        "https://cards.scryfall.io/normal/front/6/0/608567fd-9f94-4058-831a-77cb6019ef02.jpg?1547516361", 
        "https://cards.scryfall.io/normal/front/c/8/c8212667-7e18-42a5-9f36-4f8a6ad12f83.jpg?1631050788",
        "https://cards.scryfall.io/normal/front/f/a/fad2b56b-bedf-4d8e-8e0c-733946e0731b.jpg?1682209118", 
        "https://cards.scryfall.io/normal/front/2/f/2f5689e2-d8a2-442b-8027-f89686adcb67.jpg?1682209400",
        "https://cards.scryfall.io/normal/front/d/d/dd95d377-a61e-4b62-a883-ed491c48da15.jpg?1682208250", 
        "https://cards.scryfall.io/normal/front/6/1/614be454-3829-4c3b-9485-930755dfa16d.jpg?1682210173",
        "https://cards.scryfall.io/normal/front/8/6/8683a978-1bef-4b01-9361-56b1fc157d26.jpg?1665822427", 
        "https://cards.scryfall.io/normal/front/0/8/0875f4e3-d0be-41ce-870c-ee63f1af1904.jpg?1682209639",
        "https://cards.scryfall.io/normal/front/6/a/6aa98767-ae27-4cf0-98ea-93e659f160f4.jpg?1636223832", 
        "https://cards.scryfall.io/normal/front/5/a/5a53982e-3d66-4808-bcb5-46ff40567872.jpg?1634350039",
        "https://cards.scryfall.io/normal/front/0/f/0f6966e9-212a-48d1-8206-7cdc0073c17c.jpg?1673484370", 
        "https://cards.scryfall.io/normal/front/b/e/be6fdec0-a2c4-4da2-ae14-961185eaee66.jpg?1627707261",
        "https://cards.scryfall.io/normal/front/1/7/17416926-168b-49b3-9231-acbb8f8a1d13.jpg?1557577188", 
        "https://cards.scryfall.io/normal/front/7/4/74b4c336-5d4c-4bc5-b82a-35084a6ad808.jpg?1562918363",
        "https://cards.scryfall.io/normal/front/3/d/3d9149ed-0e59-48b3-b48c-d5ea77b7239e.jpg?1674141166", 
        "https://cards.scryfall.io/normal/front/1/9/19f1ac65-aed8-4ac6-ba90-e088db6c1389.jpg?1613386895",
        "https://cards.scryfall.io/normal/front/5/a/5adcb500-8c77-4925-8e2c-1243502827d1.jpg?1604243976", 
        "https://cards.scryfall.io/normal/front/4/f/4ff97c69-6a6b-401c-b0a1-55fa81045d19.jpg?1673307016",
        "https://cards.scryfall.io/normal/front/d/8/d8f69cea-823c-482b-a605-8138b3d950e6.jpg?1643587406", 
        "https://cards.scryfall.io/normal/front/2/0/20fec02d-77af-4975-b410-7097c7c28e7e.jpg?1651655696",
        "https://cards.scryfall.io/normal/front/0/3/0360f1ff-15c9-48e3-89eb-fbc4bf140c55.jpg?1682209311", 
        "https://cards.scryfall.io/normal/front/d/4/d4813f6b-51f9-4d37-ab36-24d9485342b4.jpg?1682210201",
        "https://cards.scryfall.io/normal/front/2/7/27305aad-f1bd-4895-8611-143bc0250bee.jpg?1594737522", 
        "https://cards.scryfall.io/normal/front/f/b/fb87782d-e9c7-440b-bd96-aa043d18e185.jpg?1601080073",
        "https://cards.scryfall.io/normal/front/5/d/5d7550ac-c8cd-4e10-8099-c5a42ab093fc.jpg?1580013738", 
        "https://cards.scryfall.io/normal/front/a/f/af3928b4-813a-4120-8799-de34235d60ac.jpg?1623189435",
        "https://cards.scryfall.io/normal/front/e/d/ed0ace28-9a33-4f0d-b8c8-f5517f20ccf1.jpg?1572490057", 
        "https://cards.scryfall.io/normal/front/2/b/2beffa94-862d-4cf1-9272-7fe0425a60e7.jpg?1651655753",
        "https://cards.scryfall.io/normal/front/7/9/794e01e7-430c-43cf-ba2b-1028cd088148.jpg?1682208723", 
        "https://cards.scryfall.io/normal/front/f/8/f8ce9858-747e-441c-95a8-6af44aa2098d.jpg?1581480884",
        "https://cards.scryfall.io/normal/front/6/3/6310af34-e671-4974-b291-279b91585459.jpg?1682209604", 
        "https://cards.scryfall.io/normal/front/f/7/f73fdf76-e3a6-49d0-bfb0-4b7cdbd4271e.jpg?1627706949",
        "https://cards.scryfall.io/normal/front/e/9/e9c124d7-b4b1-43cf-9830-1244053cc056.jpg?1682209577", 
        "https://cards.scryfall.io/normal/front/e/f/efa8dbf0-4e5a-452b-826f-5813e8cd9d85.jpg?1631048726",
        "https://cards.scryfall.io/normal/front/d/a/da4f8f35-5860-4416-b7bb-9ba56540a28c.jpg?1673147708", 
        "https://cards.scryfall.io/normal/front/8/0/80fffad3-2486-4350-8dff-54a215ebfc28.jpg?1682209129",
        "https://cards.scryfall.io/normal/front/0/8/08505dcf-8e39-498c-b21a-5e074e7efe48.jpg?1658650111", 
        "https://cards.scryfall.io/normal/front/0/1/01a8576e-cadc-4521-aadd-3a05f0bc4d20.jpg?1581479085",
        "https://cards.scryfall.io/normal/front/9/7/97f6c62a-b149-4cc2-9210-6420f31a6781.jpg?1674141821", 
        "https://cards.scryfall.io/normal/front/a/3/a3244114-b854-4911-bc0d-76d18ce9d2ea.jpg?1562927948",
        "https://cards.scryfall.io/normal/front/2/2/228c1650-da3c-4099-91b6-18e3873c9cdb.jpg?1604195419", 
        "https://cards.scryfall.io/normal/front/a/b/ab0cee38-5e24-49d0-870c-22843ed4e101.jpg?1576384009",
        "https://cards.scryfall.io/normal/front/c/e/ce5391bc-6b50-49b0-96a1-df944a55d62e.jpg?1610074990", 
        "https://cards.scryfall.io/normal/front/4/d/4d3fffa5-50ec-4502-9f03-bd9618f1771e.jpg?1631234798",
        "https://cards.scryfall.io/normal/front/c/b/cb52e7ba-5340-44e1-9b63-775e1f387925.jpg?1562823088", 
        "https://cards.scryfall.io/normal/front/b/3/b3e47d49-e5b5-487b-a1ec-373dbf89b2ec.jpg?1673148829",
        "https://cards.scryfall.io/normal/front/a/a/aad61d99-5c8e-47b7-ab1a-e70905f59205.jpg?1631235039", 
        "https://cards.scryfall.io/normal/front/b/b/bb9ad57f-cca2-4717-a951-cbe3c7782efe.jpg?1576381637",
        "https://cards.scryfall.io/normal/front/d/9/d9b9e2c6-7af7-42ae-91b2-0d17312b3624.jpg?1562625737", 
        "https://cards.scryfall.io/normal/front/e/f/ef1e1dff-b559-441d-8df3-b6a418066aca.jpg?1654568238",
        "https://cards.scryfall.io/normal/front/a/4/a4ee4648-dd6e-4ba9-b643-a7e4c430d51f.jpg?1651655895", 
        "https://cards.scryfall.io/normal/front/b/8/b83cfbaa-7890-4f6f-878b-4edb45677371.jpg?1604193295",
        "https://cards.scryfall.io/normal/front/7/b/7b0a2799-197e-4d61-ab23-67d974458a05.jpg?1631590611", 
        "https://cards.scryfall.io/normal/front/a/7/a7782044-616e-4d4f-b38f-93320ba19797.jpg?1674141201",
        "https://cards.scryfall.io/normal/front/1/1/11fbba08-0d93-4750-9dd6-d6a2779c6cf3.jpg?1608909827", 
        "https://cards.scryfall.io/normal/front/3/5/351e8b1b-4e4e-4ffc-a134-3cf0e2a1dd6d.jpg?1555040769",
        "https://cards.scryfall.io/normal/front/5/0/50bc0f5b-7421-45b9-af85-86dd9821b7d8.jpg?1631235570", 
        "https://cards.scryfall.io/normal/front/1/7/17bc2af0-5a1d-4319-a285-6a15cf86be83.jpg?1594736962",
        "https://cards.scryfall.io/normal/front/c/6/c6202e82-e159-482f-9224-292cb533171c.jpg?1557576219", 
        "https://cards.scryfall.io/normal/front/1/1/11641a17-e979-4edb-adba-789f21fd017d.jpg?1637630011",
        "https://cards.scryfall.io/normal/front/1/7/1785cf85-1ac0-4246-9b89-1a8221a8e1b2.jpg?1626097239", 
        "https://cards.scryfall.io/normal/front/9/8/98a2cd4c-f02e-4a5e-a5f5-1aad52132b90.jpg?1673305264",
        "https://cards.scryfall.io/normal/front/3/0/301ff69c-2590-45af-893b-7ac0285e450b.jpg?1641602963", 
        "https://cards.scryfall.io/normal/front/6/3/63cf5e98-9d40-4cb0-83de-043751b1382f.jpg?1674141722",
        "https://cards.scryfall.io/normal/front/3/d/3de11222-c2fa-4544-a501-a02b31797259.jpg?1674141357", 
        "https://cards.scryfall.io/normal/front/d/b/dbee85f6-a880-49ce-8139-5c439a202821.jpg?1673305172",
        "https://cards.scryfall.io/normal/front/0/e/0ef8d3a2-5c6b-41e2-aa7d-81e4a5d04421.jpg?1651951758", 
        "https://cards.scryfall.io/normal/front/f/e/feb7ad1b-4466-48f7-b46d-cc83d4e22b51.jpg?1674137153",
        "https://cards.scryfall.io/normal/front/1/5/158407ad-35a9-40e1-9762-1c0572b56ecb.jpg?1637631384", 
        "https://cards.scryfall.io/normal/front/0/8/08e3dda1-a1d3-48c9-8c81-da7eae20ac8a.jpg?1627701793",
        "https://cards.scryfall.io/normal/front/0/2/02351d67-2d73-43e3-82f7-5277c532d7ac.jpg?1637630049", 
        "https://cards.scryfall.io/normal/front/2/e/2e90b9b2-8e8e-4b00-b3a0-b26dd4551550.jpg?1674142062",
        "https://cards.scryfall.io/normal/front/5/2/5252794a-5cbe-45e3-b5c1-b27c667e9c17.jpg?1658650124", 
        "https://cards.scryfall.io/normal/front/7/2/728b802c-969b-4865-b7a0-871c585d097a.jpg?1617148314",
        "https://cards.scryfall.io/normal/front/2/0/2092e6db-1196-43bf-b7c9-07498fa7ca90.jpg?1562201861", 
        "https://cards.scryfall.io/normal/front/a/9/a93e9d33-0c5d-4890-a1aa-84f59af9d4fb.jpg?1631234951",
        "https://cards.scryfall.io/normal/front/8/3/836f5197-e42b-45e0-8170-1b0a8a5beebd.jpg?1604231452", 
        "https://cards.scryfall.io/normal/front/5/6/56d93855-c749-4bdf-9a90-4f69f4226e46.jpg?1674185780",
        "https://cards.scryfall.io/normal/front/e/3/e31c544f-a748-4180-8366-9bb1622bb99d.jpg?1562304816", 
        "https://cards.scryfall.io/normal/front/3/c/3c21df8e-a24f-4ce1-aa8a-1467f9f9423a.jpg?1562703323",
        "https://cards.scryfall.io/normal/front/5/9/59faa45d-868b-4bc7-934c-0e077642e129.jpg?1674420209", 
        "https://cards.scryfall.io/normal/front/2/0/20bfecb3-2dc8-4549-9297-413131de8fdc.jpg?1637630635",
        "https://cards.scryfall.io/normal/front/f/7/f7e2b0e1-c9ea-4f91-b19e-73b1bd6a0884.jpg?1682208232", 
        "https://cards.scryfall.io/normal/front/4/0/407c1b95-dc0c-4154-a441-fe25537df45c.jpg?1631234995",
        "https://cards.scryfall.io/normal/front/c/8/c8511fe7-63f9-4942-8972-d40bf5d7e949.jpg?1633281721", 
        "https://cards.scryfall.io/normal/front/7/3/73f2d0bb-f6d6-4073-8959-31643f3b2bb6.jpg?1682209960",
        "https://cards.scryfall.io/normal/front/a/0/a0b6a71e-56cb-4d25-8f2b-7a4f1b60900d.jpg?1650599829", 
        "https://cards.scryfall.io/normal/front/0/a/0aa3a844-97e6-4f5d-a36f-56fea4e06932.jpg?1543675886",
        "https://cards.scryfall.io/normal/front/d/b/db1d67fe-bffe-45ad-af6a-cb131ddb1a12.jpg?1625191044", 
        "https://cards.scryfall.io/normal/front/2/b/2b7fea79-9600-41d2-84d2-34a61a08a0d4.jpg?1627702112",
        "https://cards.scryfall.io/normal/front/c/3/c3bc8b9e-4d22-41ba-b593-d383fd301ef9.jpg?1593095228", 
        "https://cards.scryfall.io/normal/front/b/a/ba16bfb3-dbd3-4b3a-b155-08b613268d57.jpg?1599708675",
        "https://cards.scryfall.io/normal/front/1/4/1480725e-efad-45e8-b46c-8a1d8da661aa.jpg?1637629009", 
        "https://cards.scryfall.io/normal/front/9/0/9008e94a-cfec-473f-ae75-57586e45098d.jpg?1637629923",
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