import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tournament',
  templateUrl: './list-tournament.component.html',
  styleUrls: ['./list-tournament.component.scss']
})
export class ListTournamentComponent implements OnInit {

  public menu = 0;
  public seeMoreItem: any;
  public noCreditAvailable: any;
  public optionsCheckbox: any;
  public form: any;
  public tournamentForm: any;
  public prizeTableAllIn:any;
  public item: any
  public countFinished = 10;
  public countUnfinished = 20;
 
  unfinishedTournaments = [
    {
      "id": "c73dc47e-8cb0-484b-8760-a628e4259284",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-03-10T20:59:00.000Z",
      "startAt": "2022-03-10T03:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 50,
      "description": null,
      "external": 0,
      "name": "Daily Free",
      "participants": 32,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "winj22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-03-10T12:00:14.819Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-03-10T20:59:01.293Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "97feb5a0-da88-4f76-a987-6d05dc4fb463"
        },
        {
          "id": "5bb92d24-c472-4a74-8451-32b3510219a5"
        },
        {
          "id": "df7ff03f-30e6-499b-95b0-eb2dd551441f"
        },
        {
          "id": "85aefbdc-4ec3-40a1-a3b0-a9e26c70a402"
        },
        {
          "id": "047a11a8-84c4-4816-a846-b3b40dd299fb"
        },
        {
          "id": "02ee63dc-f0d7-4ce7-a7d6-624eb2b70591"
        },
        {
          "id": "e7ef4f13-a678-42d7-8552-a96026803b1d"
        },
        {
          "id": "0e9c678b-20bf-47d5-b6e9-c8d9a66bc6ad"
        },
        {
          "id": "08a09778-6054-4bc0-8543-1ec1954382ce"
        },
        {
          "id": "595fcfcb-baec-4cf0-abce-18af13632410"
        },
        {
          "id": "9a06eec0-605e-4c9c-9d08-388aa4097cad"
        },
        {
          "id": "74d68a44-01eb-4b14-9f84-5ea21748c68d"
        },
        {
          "id": "21e84ebf-facf-4ff5-90a5-29318b6ebcd1"
        },
        {
          "id": "d3e1edb2-b5c5-45b0-9eea-40bb16a3c780"
        },
        {
          "id": "9126250c-edcb-497e-8205-a453e965c121"
        },
        {
          "id": "4eae7d4b-4932-4962-a08e-68d1447827c1"
        },
        {
          "id": "884e9d73-1b93-4819-8af4-5befca82204d"
        },
        {
          "id": "368d25e5-dfa0-4674-b33b-ca8cdbd5f6cd"
        },
        {
          "id": "8eedd477-e4e5-466e-ad6f-0bf44c8d9993"
        },
        {
          "id": "7d477bd0-3176-4d46-a8a6-278d1df51a99"
        },
        {
          "id": "615c8215-57fa-45b9-9a47-51dcc9172a7a"
        },
        {
          "id": "155989e9-6e16-47bf-8c84-461f5c99a9ba"
        },
        {
          "id": "58565626-e7c0-435b-a2a1-4f8089b522d6"
        },
        {
          "id": "05d05db1-f22b-4ea8-b0df-8bab4e879ccd"
        },
        {
          "id": "b893a46b-91fb-420e-8cc1-af9ff8dcd296"
        },
        {
          "id": "f208e04f-a682-4ff3-8fa0-c5f433e61ec7"
        },
        {
          "id": "5eb5664f-146f-4cf2-9a23-1592b39120eb"
        },
        {
          "id": "ee11fcca-87b5-4fc4-aaf1-25155ad8a1ed"
        },
        {
          "id": "dc744c85-8386-46cf-b4c0-d1e7f8cd7208"
        },
        {
          "id": "c71de0c0-f02c-4fdf-92ff-0aa1ab343c1d"
        },
        {
          "id": "1e850e9b-14e9-4ce1-8129-07f579bea437"
        },
        {
          "id": "4ec97559-fd66-4324-a604-5937127cdf1d"
        }
      ]
    },
    {
      "id": "5b380466-60ae-46ff-b7bb-fc02aa272afa",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-03-03T23:59:00.000Z",
      "startAt": "2022-03-02T03:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": null,
      "participantLimit": 25,
      "description": "Teste",
      "external": 0,
      "name": "Torneio Teste",
      "participants": 6,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoj22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 20,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "5000",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-03-02T17:18:09.328Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-03-04T17:47:30.737Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "94371366-b61b-4e80-9522-2e92061eca3c"
        },
        {
          "id": "9d87ad5a-e8e0-4380-a94c-a633ead523ad"
        },
        {
          "id": "851ccb5d-2a84-47ff-8c97-ca4762ac1906"
        },
        {
          "id": "5baa2c91-e156-406a-b151-8f5caac1b9c3"
        },
        {
          "id": "af013001-3fb8-4fbf-bdd8-6e727009de39"
        },
        {
          "id": "584e1a04-fa7b-4b11-9b5b-e06ebe41e2f4"
        }
      ]
    },
    {
      "id": "fed5a89c-2c95-4c5c-adb0-b5f98024ea01",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-03-01T02:59:00.000Z",
      "startAt": "2022-02-28T03:00:00.000Z",
      "inputAmount": "10000",
      "prizeAmount": "212500",
      "participantLimit": 25,
      "description": "Torneio de teste para implementação e teste de funcionalidades.",
      "external": 0,
      "name": "Teste",
      "participants": 0,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoj22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "5000",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-24T11:46:22.160Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-03-01T11:00:00.569Z",
      "active": true,
      "tournamentPersonList": []
    },
    {
      "id": "43177167-25dd-43b7-a40f-0ce0b180d4b1",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-21T20:00:00.000Z",
      "startAt": "2022-02-21T03:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": null,
      "external": 0,
      "name": "Daily Free",
      "participants": 71,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "winj22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-18T15:10:40.174Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-21T20:30:27.449Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "437c302c-5fcd-48ea-a736-c111c3281d2c"
        },
        {
          "id": "798e9e97-3aad-498f-9867-0e1cc84ad89f"
        },
        {
          "id": "97032eac-d750-4e66-9c53-427a5c5bda35"
        },
        {
          "id": "52c30f6b-89f6-4b58-b2e4-bd612ea8b5b7"
        },
        {
          "id": "98e5c4db-0a00-4ef8-a82e-dda17f0215cc"
        },
        {
          "id": "0006492f-8d65-4d99-8768-e7e99cdd06be"
        },
        {
          "id": "90b3208a-4ae9-414f-b240-322ace410072"
        },
        {
          "id": "7d06aad1-d8e5-4328-b212-08769187e2e1"
        },
        {
          "id": "00993ff8-689e-4bea-9288-3e731d428f70"
        },
        {
          "id": "464aedb0-90fe-40fd-8383-03a48c8bbf56"
        },
        {
          "id": "261b0255-cb29-4dbc-afbc-b11aadd6de7a"
        },
        {
          "id": "78f33a1d-2750-4639-9007-9b364d7617bd"
        },
        {
          "id": "080b0dad-b288-4b15-8c2c-95f2b0c834ca"
        },
        {
          "id": "0a7642a4-8854-4a49-8704-9b33a696a505"
        },
        {
          "id": "6e0ac49d-138f-4aab-b3c9-3a2f806691ad"
        },
        {
          "id": "6d605577-033c-4b64-98ff-46ceaf02c0ce"
        },
        {
          "id": "808604d7-1d28-4755-a329-1d426e107f36"
        },
        {
          "id": "a6cac852-2a65-4bff-8802-9da1ebb9415f"
        },
        {
          "id": "68a7171d-8ccf-41a6-a2b7-84abc588baf9"
        },
        {
          "id": "2cf096fd-4123-4b31-97e6-f3fc51f4c7f3"
        },
        {
          "id": "1264616f-fa87-468d-8b06-20d9396da483"
        },
        {
          "id": "47c2668b-2d2d-42c5-8ce9-639bbe4b38e1"
        },
        {
          "id": "dbd9e10f-752c-48fe-ac70-7473df395d7a"
        },
        {
          "id": "124a20a9-bd5f-453f-9c29-1107e27ef254"
        },
        {
          "id": "4215104e-ac3e-4736-a75a-742c9a0abd50"
        },
        {
          "id": "6f8df3c1-0d52-478c-8f6e-d00a56192922"
        },
        {
          "id": "344cb6ac-b09f-42d0-9805-565173d68a86"
        },
        {
          "id": "8f1cc2f1-7eeb-4781-92f7-e2061e2d3677"
        },
        {
          "id": "7f22c781-3a24-4fd2-bee4-c10f1a0e6dff"
        },
        {
          "id": "7cf7ad80-893e-4524-ad96-2aaf7398c0c8"
        },
        {
          "id": "333911da-5424-4d58-8857-5ab46f678323"
        },
        {
          "id": "935bc91d-bb95-46ae-8118-def7b3bd7dc1"
        },
        {
          "id": "fcd9d10f-d749-4f66-bd39-5f34f7d4ebc2"
        },
        {
          "id": "20798f77-9456-4ccb-a20c-1f65a87d717b"
        },
        {
          "id": "57fc49eb-3ca6-4482-b473-eb94247edd21"
        },
        {
          "id": "9252a4ee-4e5b-4eb4-b6cb-134e4d0af752"
        },
        {
          "id": "9b0bd0cd-1951-4294-93a2-8b51ebb41a2e"
        },
        {
          "id": "106b07b5-ff17-436c-b7a7-d9f29ee2538b"
        },
        {
          "id": "2307572e-3deb-4e7a-a213-84d4aa4dd182"
        },
        {
          "id": "63049cbd-6906-4f9c-a489-849fdf958036"
        },
        {
          "id": "55a5ac9e-4236-4938-b17b-2fe0c5125faf"
        },
        {
          "id": "27791364-90e5-4f2a-8e5d-ecb7081ab7cd"
        },
        {
          "id": "83318106-6c61-4b2e-b032-948136721512"
        },
        {
          "id": "1b924a94-2c4f-49bd-ae2f-947f003c865e"
        },
        {
          "id": "10ec9478-46e8-457f-b5fe-aa76d5bbeaa5"
        },
        {
          "id": "069aa999-5519-4466-aae0-cc7f18235184"
        },
        {
          "id": "96fd886b-d428-459b-873e-f9f812c84b28"
        },
        {
          "id": "2dfd1d63-eba9-456e-849c-e145edd1c370"
        },
        {
          "id": "fb053a31-ff72-4892-83d9-7b0fd7e90205"
        },
        {
          "id": "0fbadf5d-6c68-4402-9b3c-1851a691056c"
        },
        {
          "id": "f651e4bf-c363-4cd7-9175-b92fda0450c9"
        },
        {
          "id": "023b7614-20d5-44db-afa8-3f1c4ff67197"
        },
        {
          "id": "75773cd0-b65a-48c4-930a-db87b9f856c7"
        },
        {
          "id": "2d9c16bc-ee66-4f47-809c-fe688878576d"
        },
        {
          "id": "7b2a1a02-2422-444b-a937-bd5d599251e3"
        },
        {
          "id": "01ca1b94-7269-492d-b104-534abb5ad34e"
        },
        {
          "id": "7d0cbe90-4fbc-4789-83fb-db789bbf1fe0"
        },
        {
          "id": "c51ed174-bc3c-48a0-a7d0-fa909fdb99d0"
        },
        {
          "id": "bcc4abbd-ffa0-4e18-8fa3-00f298ae9a59"
        },
        {
          "id": "abebf288-85d4-4683-aea4-253d3053bb4e"
        },
        {
          "id": "a74859b8-8995-4da2-be55-c89de6e8c9f0"
        },
        {
          "id": "59fec05c-3155-4f9e-8816-676429c9e7bf"
        },
        {
          "id": "e61caacc-d752-4ed8-b0e8-5f8d91c95c2e"
        },
        {
          "id": "0da9a6fc-4332-4c66-a235-5b6197465a9e"
        },
        {
          "id": "f1caa4ad-4138-420a-9a1f-61decab1a506"
        },
        {
          "id": "53d76f2f-23a2-466b-a0c9-9f5e1329411b"
        },
        {
          "id": "b0df3c36-864e-424a-9573-81108472609f"
        },
        {
          "id": "5fb11dc3-0ae0-4dac-9182-e9d9f57b5b48"
        },
        {
          "id": "11b27eaf-ccb9-4193-a0a1-2bf6c21ff25c"
        },
        {
          "id": "8d735602-390f-4bc4-b128-172a893825f0"
        },
        {
          "id": "08c79287-169c-4967-8f70-a64cfe8e4001"
        }
      ]
    },
    {
      "id": "7ef829cc-a86f-48ea-bc61-e2fbeb8e9622",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-18T20:00:00.000Z",
      "startAt": "2022-02-18T12:09:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": null,
      "external": 0,
      "name": "Daily Free",
      "participants": 49,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoh22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-17T17:27:03.268Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-18T20:30:22.451Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "9c32b235-7be7-4753-8d0c-d670add278b8"
        },
        {
          "id": "88d3cf45-c669-424f-92ab-e3378dbb4986"
        },
        {
          "id": "f276b253-9f01-4476-9d5b-1216bdab4e5b"
        },
        {
          "id": "3c27c5c3-f2a5-432a-a242-30e53e387b87"
        },
        {
          "id": "e0e2cbf8-a0d4-4764-bf93-5a8916bc9e98"
        },
        {
          "id": "ea229717-5401-4f65-b7e2-485791f391f3"
        },
        {
          "id": "242cbbf2-4c7a-46bc-9619-89a90dd526f5"
        },
        {
          "id": "5cd164c1-52cc-47cd-8132-c7861a11649c"
        },
        {
          "id": "61e70405-9fc3-40cd-91c0-772dc5bfa01a"
        },
        {
          "id": "45d1c2a6-221d-4f51-b75f-cc0de9441bb7"
        },
        {
          "id": "a7cbcf12-26e0-4e6e-a04f-0b1dca3bd6bb"
        },
        {
          "id": "7caa5c7d-1d75-4112-a859-3e103d655215"
        },
        {
          "id": "544c53b7-a431-41d7-a2f3-258b97e62e97"
        },
        {
          "id": "eefda8b8-d88d-46f5-bd32-54dac4d6870d"
        },
        {
          "id": "10b89232-66fa-4099-a881-2565d6e1ecc6"
        },
        {
          "id": "b744422d-c11b-4f11-95da-14dc60ccdcc4"
        },
        {
          "id": "794a6467-a456-4a24-a24d-6b72d1614693"
        },
        {
          "id": "353d3576-97d8-4907-a69b-59c8d4f62e81"
        },
        {
          "id": "758e4c5a-e3d6-435f-8648-db857c845f71"
        },
        {
          "id": "989f5745-41a2-45d9-a706-0825bc13e2ca"
        },
        {
          "id": "fdacc0b2-4606-49c1-8bb9-56b75dd4808b"
        },
        {
          "id": "11c33fc1-9a05-42a9-b328-97c86ab8b273"
        },
        {
          "id": "d90f7b27-c0b7-4a15-b2c8-53feaac54e42"
        },
        {
          "id": "8cdffa8d-b74f-4afd-afb2-58c6cfa23be9"
        },
        {
          "id": "0669923e-356e-4a3d-bb15-adafe3d08e86"
        },
        {
          "id": "a036a98c-f8e1-47e3-a6db-bb346cf39720"
        },
        {
          "id": "feac85b4-b880-4170-81ae-6e01ad0105da"
        },
        {
          "id": "17d60ed4-65ff-428a-abce-8244a25d7422"
        },
        {
          "id": "be95a0f0-a66a-4359-b1cd-c4293d26a9ad"
        },
        {
          "id": "c1acbd4e-7317-4284-a48b-5f79a06fcb23"
        },
        {
          "id": "6f35b99e-b54d-4ea3-8b23-ff97033f0850"
        },
        {
          "id": "8799a11d-aa52-4b47-9d66-4006667472e1"
        },
        {
          "id": "aa12c2f0-894d-4951-aa81-bebc7c6f0615"
        },
        {
          "id": "b79f12a6-c275-4269-8aba-ad2e470f6732"
        },
        {
          "id": "d1e1d8d8-754a-4c32-9c32-f527a6468e01"
        },
        {
          "id": "189a60a0-d502-4636-9c79-cfc5f123b213"
        },
        {
          "id": "e2633e22-f23b-4475-bae7-93adb00b0ec0"
        },
        {
          "id": "42be2141-25ed-480b-b08b-1e1d628409f5"
        },
        {
          "id": "773d4af7-562a-4bac-b9d7-ae155e5a8dc7"
        },
        {
          "id": "cecf443c-0c5d-4c41-b719-53abbfe303fb"
        },
        {
          "id": "2c3e8eee-1ece-4d44-906c-355cfa9f014e"
        },
        {
          "id": "a80f92b0-33ec-44f3-a2f3-c97d8fde3cea"
        },
        {
          "id": "f9f7dffe-18e9-4e44-9f2f-a01fbe52451a"
        },
        {
          "id": "53c3a36f-db91-4020-b72e-15530ce766ff"
        },
        {
          "id": "88c95145-ab19-4529-bd0e-400ca6a0ca44"
        },
        {
          "id": "2719f412-0150-49f7-ad47-7c7d7decfb26"
        },
        {
          "id": "a4cc105d-6ed1-416e-a5c5-3e8578a1f3f1"
        },
        {
          "id": "743bccb5-80ec-469b-b0c0-20b32f49d213"
        },
        {
          "id": "681b2146-e2aa-4f90-b9da-b2a6c4562802"
        }
      ]
    },
    {
      "id": "eab2ef54-5bb4-4893-a03c-877257e871d2",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-18T20:00:00.000Z",
      "startAt": "2022-02-18T03:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": null,
      "external": 0,
      "name": "Daily Free",
      "participants": 59,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "winj22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-17T17:26:01.697Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-18T20:30:10.777Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "e9e526cf-6629-4040-b84c-3a10591593b6"
        },
        {
          "id": "d87d7639-81de-43db-9311-76299324bce6"
        },
        {
          "id": "f1927074-72a2-499d-8ae7-0cbee062535c"
        },
        {
          "id": "1cc366b1-7dde-4bf0-a446-85a149829696"
        },
        {
          "id": "fce87412-686b-49f5-ac69-42db99c3f1f4"
        },
        {
          "id": "f218b997-8c39-4a67-a1e0-502e069798e5"
        },
        {
          "id": "d27b6a56-1366-4de8-9d9a-5bc952578ba5"
        },
        {
          "id": "a81ad0c3-e285-4ce0-a89c-c404c793fbbe"
        },
        {
          "id": "42833639-57f6-4893-9dc3-54f69979dc93"
        },
        {
          "id": "a01be806-36e2-49ea-8ac8-dfb51b20cf0e"
        },
        {
          "id": "b17f4a9c-5b23-4ed5-997e-40f36c2696be"
        },
        {
          "id": "a1d95431-910f-4282-8610-e1b7b7d4cde0"
        },
        {
          "id": "f5478e0b-fa40-4c7a-8c73-819d4a73408b"
        },
        {
          "id": "59e9431e-7651-43e9-a591-e71d9e07c78b"
        },
        {
          "id": "e9b42286-0346-4889-abfc-cc0d6159a224"
        },
        {
          "id": "fc62833a-7f8f-42bf-9c06-f92673d44b65"
        },
        {
          "id": "e20c196a-5081-4da2-8c6b-57f8d3ed7522"
        },
        {
          "id": "8738b32f-ae9a-4a8f-87b8-f22d5ed693cd"
        },
        {
          "id": "f947689a-7800-4834-a595-1b1772b8fa8d"
        },
        {
          "id": "94ac5c1a-1615-4a74-9b66-ee6ff67113b1"
        },
        {
          "id": "716eb007-220f-4a0e-9869-2f081a7bf411"
        },
        {
          "id": "dd10e87e-3886-416a-9bee-8f1eecdc9201"
        },
        {
          "id": "595d9c60-1b36-4870-a940-6e582ede6daa"
        },
        {
          "id": "f12d3497-e94d-47d2-83a6-5a76bdb142ab"
        },
        {
          "id": "a72c8df8-f769-44ab-96f3-74266cb5d584"
        },
        {
          "id": "576957a3-db3f-40e4-8805-9895b53b4dc5"
        },
        {
          "id": "0c01e217-9aa3-43c7-a10e-3230541029ce"
        },
        {
          "id": "c061f812-ed25-421e-8474-a9d885c3e796"
        },
        {
          "id": "f3b933c5-1b9e-4c0a-a7d4-d738bbe64a82"
        },
        {
          "id": "0eb31a36-0c81-402d-aa64-b9d2fb65349b"
        },
        {
          "id": "39dfe2c1-d568-422c-82a8-d2c352476b74"
        },
        {
          "id": "927226c9-ccc1-4e17-929e-c2ed74da3c2a"
        },
        {
          "id": "52165e9c-f2b9-457d-aa5b-0e2dfe8b1a8c"
        },
        {
          "id": "ce9a39e1-245d-4c12-8f02-1b234333c0a4"
        },
        {
          "id": "ad592c86-cb3e-4ead-ae46-5cbee5feb9d2"
        },
        {
          "id": "b70dd54a-15b7-44a8-913a-54deb7e76a4a"
        },
        {
          "id": "7ed4c013-190b-48f9-bed4-84bb0652253f"
        },
        {
          "id": "85ec6d61-0892-4b6e-ab28-34717ed83abf"
        },
        {
          "id": "73a49b02-3c91-4c69-9b67-d2fce627be3b"
        },
        {
          "id": "7b465a23-b05c-4420-bb5d-ca1066c9c920"
        },
        {
          "id": "f55d36ae-d614-4ddc-8cd9-9c7a291f7335"
        },
        {
          "id": "ec5b7ba4-b3aa-4c5b-b715-fd3ae7668465"
        },
        {
          "id": "b39cf93a-ebaf-4c3b-bc2d-bea7aeb3f63b"
        },
        {
          "id": "26bee67d-37bf-4897-9a7c-d21a67b4eb8f"
        },
        {
          "id": "35363c4e-32ad-4c77-868c-86590bc1c719"
        },
        {
          "id": "48467f44-fc0f-4313-9740-9f917f55c441"
        },
        {
          "id": "ac16e563-b38c-40c2-8b55-e72e82aef30d"
        },
        {
          "id": "dbfc1f50-2c9c-4042-b123-21d56eadcd27"
        },
        {
          "id": "d8cd11e5-893f-4bf2-af9a-cd57dd728b4c"
        },
        {
          "id": "89c3c478-f7a2-446b-a01d-60da0c44db16"
        },
        {
          "id": "f837334a-1de6-485e-a4a3-9c189c2787a8"
        },
        {
          "id": "61aa2db8-6b00-4a34-8afc-e13dc988ec5d"
        },
        {
          "id": "f113a739-ded3-4ad5-8028-2bfbe52dd610"
        },
        {
          "id": "84631108-1976-415b-addc-add569d485a8"
        },
        {
          "id": "4ba09e7a-1730-4de6-b9da-89f8782fcc74"
        },
        {
          "id": "d289995f-22d1-45d3-a33f-1204dc93e444"
        },
        {
          "id": "0b447f80-6571-411d-8345-cd4ddde7969d"
        },
        {
          "id": "32504e58-1c3c-4161-84a1-9e520b350dbc"
        },
        {
          "id": "abaeb31c-27a3-42a0-9a2a-75b2508aef65"
        }
      ]
    },
    {
      "id": "6e8aa608-fa2b-4933-9678-070717eb28af",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-15T18:30:00.000Z",
      "startAt": "2022-02-15T18:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": null,
      "external": 0,
      "name": "Express",
      "participants": 6,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "wing22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-15T18:09:38.393Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-15T18:36:43.640Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "112c79e0-a201-4ffa-b2c1-fa6ddd831594"
        },
        {
          "id": "e8910338-845c-4998-b94b-21e314764c0d"
        },
        {
          "id": "a095bb7f-a197-4dde-af4f-c0de77449ebe"
        },
        {
          "id": "0e3cf4a2-a52b-4e84-afd0-c5c38e8940eb"
        },
        {
          "id": "d82553bb-654f-4984-8563-d6e4c7bd6938"
        },
        {
          "id": "c2318a49-9083-4251-889b-466487522964"
        },
        {
          "id": "d538f7cf-2f65-4380-86dd-1b30f6554639"
        }
      ]
    },
    {
      "id": "9543a47b-80df-408f-89a3-d5b34b742f89",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-10T20:00:00.000Z",
      "startAt": "2022-02-10T13:00:00.000Z",
      "inputAmount": "20",
      "prizeAmount": "850",
      "participantLimit": 50,
      "description": null,
      "external": 0,
      "name": "All Win - Quinta",
      "participants": 18,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "wing22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-09T14:00:20.542Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-10T20:31:12.923Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "ae5d2332-9654-45bb-b9c4-c00abd5f1143"
        },
        {
          "id": "cd8be9e9-7708-41a4-8f64-98c372c6acd7"
        },
        {
          "id": "d0515de7-d1fb-4a43-9eb9-66a2d5840eb8"
        },
        {
          "id": "f648e0f0-31eb-448f-8466-53f1f4e95f04"
        },
        {
          "id": "967f3eab-46fc-4ebe-bb38-b58174e97977"
        },
        {
          "id": "745af702-8150-46aa-ad4c-088dba79fd1b"
        },
        {
          "id": "a0cfa80f-514d-4603-846f-3c33605bb788"
        },
        {
          "id": "1c662bce-29f4-4b48-8414-66903737095f"
        },
        {
          "id": "83936f5b-2454-4c61-a7f3-e7cf03b10cf0"
        },
        {
          "id": "5f5d9e20-6917-46f4-a8ba-453972fe5386"
        },
        {
          "id": "aa9e686f-1c55-416a-8982-f498ee8a59c5"
        },
        {
          "id": "f43bc73d-cf81-4365-8680-7d2752612c2f"
        },
        {
          "id": "7f195488-93cd-49b7-98ed-4d2725786fd9"
        },
        {
          "id": "b9a03c07-4da6-4da3-8f4c-3b3eb673d9d9"
        },
        {
          "id": "8eca8083-15bf-4c74-bece-76fae24e7c46"
        },
        {
          "id": "f01854b4-d95a-4534-a549-009c8c38fc2b"
        },
        {
          "id": "850500c6-7343-4ccf-ae34-034bd32341ea"
        },
        {
          "id": "9c4818ab-fcf6-4bd7-b75e-05cf783204d1"
        },
        {
          "id": "ee3942c3-81c3-45ed-9e77-38062d2abe42"
        }
      ]
    },
    {
      "id": "e7fe98f4-3061-4307-beaa-bfa17f0dd325",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-09T20:00:00.000Z",
      "startAt": "2022-02-09T12:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": null,
      "external": 0,
      "name": "Daily Free 2",
      "participants": 71,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoh22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-09T11:51:11.922Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-09T20:00:00.434Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "54d4c317-810f-416c-b75c-d0a141bcd276"
        },
        {
          "id": "ac4b65a9-68da-439d-9c9e-ee74c8968e17"
        },
        {
          "id": "e3f9b1a4-98cd-4c0c-80c2-0b9b62c60573"
        },
        {
          "id": "a4812a8d-2dc5-4cb4-8c3e-da9f0403b267"
        },
        {
          "id": "26682c2e-eea4-4ca9-b8be-e15632f0f095"
        },
        {
          "id": "887a66f1-e7e9-4639-a81d-ecd8c08f965d"
        },
        {
          "id": "1bc00ed4-7ff6-4b7d-ac90-3466ff40c767"
        },
        {
          "id": "242cb736-3ea2-433f-a91f-a27205131a35"
        },
        {
          "id": "81860551-773f-47cc-8625-960e659f68e2"
        },
        {
          "id": "5c9fc3f9-70c2-490e-94ef-f8b60ae8ec7f"
        },
        {
          "id": "31a24408-3fd1-4ed0-8288-717fcc603a4b"
        },
        {
          "id": "b71fafaf-1224-4b93-b1ae-8e4ab9b6e7b7"
        },
        {
          "id": "04aeac38-04c1-4816-b986-7e9a5b1e0ac1"
        },
        {
          "id": "3e074e65-905b-4e90-adba-9e74fb1958a2"
        },
        {
          "id": "09d574b9-84e6-4209-947d-399d97d45a3f"
        },
        {
          "id": "fe38141a-e341-4260-b6b2-14a5dc1aae29"
        },
        {
          "id": "d2691320-ee9d-48c8-85fe-4473308f9283"
        },
        {
          "id": "435b81e7-274c-49bc-a847-58304258e27e"
        },
        {
          "id": "d5590e30-1a20-466c-b747-ef34c7be558e"
        },
        {
          "id": "e6d1ceb5-938b-4c6c-aa52-7211ad8d1e04"
        },
        {
          "id": "a196f8f5-64d5-4d99-92eb-3db9e5852894"
        },
        {
          "id": "4a96b90a-0d7a-4889-b873-fa40aa2f1d63"
        },
        {
          "id": "f6e4a7c0-5263-4fbc-8015-39ecb96027c0"
        },
        {
          "id": "9ef79453-b10d-4624-95e0-6039a96a0d0f"
        },
        {
          "id": "7a026c52-e12d-4b8f-ab72-d4797130e32a"
        },
        {
          "id": "55857fa4-2e28-410d-a1e8-fca3ad58e5f3"
        },
        {
          "id": "27204495-c309-4cc3-9988-8f6d8d41b6cb"
        },
        {
          "id": "276a082e-ed0c-4c29-ae75-2dee0677d8a8"
        },
        {
          "id": "88ad6f78-0913-4ff7-96bf-24b3cbd38271"
        },
        {
          "id": "4720ad51-aa61-4b3e-a324-3923f3c96f23"
        },
        {
          "id": "9b85692e-b56e-4821-ad7b-2eac7933da67"
        },
        {
          "id": "26ab8764-8222-429c-b587-3718b702302d"
        },
        {
          "id": "aa61039e-5ed6-4538-a310-cc494241d1c5"
        },
        {
          "id": "cf1d1abf-4aa9-4b5f-bc59-3f85622778c1"
        },
        {
          "id": "d99e2b2d-884e-47a3-9c41-1a1699d9d307"
        },
        {
          "id": "b21f8e5e-ce90-41f8-ab5b-ca240ae7c12c"
        },
        {
          "id": "4a44cf9b-5111-4eda-90b5-c63f95e0a345"
        },
        {
          "id": "469747d7-6190-47ab-8700-8acda0b19e7b"
        },
        {
          "id": "7385847b-08a1-445d-a234-d7fa991db3ef"
        },
        {
          "id": "6887c06d-71b6-4320-b47c-88a952e355d5"
        },
        {
          "id": "8374331e-774a-499a-8f6b-22ab406bae8d"
        },
        {
          "id": "e40a8f6d-79d5-4f6a-8d25-ecf2164d9a36"
        },
        {
          "id": "146dd95c-e6e8-44ac-aa32-f1c322d3c8ed"
        },
        {
          "id": "89919204-0085-48de-ab06-c41b1b9156b1"
        },
        {
          "id": "ced51617-b672-4c75-9075-2bf0086fd3ab"
        },
        {
          "id": "ab407e63-06a4-4479-bbf9-0e6002c7a20e"
        },
        {
          "id": "b3676c1f-2a81-4865-b6c8-11ae1788b758"
        },
        {
          "id": "af5199b6-e884-48a5-b313-99c64f1d1483"
        },
        {
          "id": "c017a624-3fb3-4d7a-a329-a8bc5fc35c66"
        },
        {
          "id": "37b34ab2-c077-4e9c-ae67-4d20148df44c"
        },
        {
          "id": "b718283f-300e-43a0-a40b-c117c184c122"
        },
        {
          "id": "fb1296b0-2369-4fb8-86ab-8853f8cfcd30"
        },
        {
          "id": "44cd72f7-6d6e-4842-818f-5881109c97e4"
        },
        {
          "id": "e3713a1a-2999-4f05-addd-52019562c3e8"
        },
        {
          "id": "60fc72d4-d039-48b0-81b7-a84711b4e584"
        },
        {
          "id": "35962139-c889-4501-a183-1651521b0ace"
        },
        {
          "id": "f94489e8-fd68-4efc-a145-56669c22e227"
        },
        {
          "id": "73a5d1fd-d780-4a15-b135-6dd89004e4f2"
        },
        {
          "id": "bacd8fb5-2a95-442e-8ebd-40a4603d6ad1"
        },
        {
          "id": "a0252731-c0d3-409d-ac6c-78d2d9f1e0d1"
        },
        {
          "id": "1e80d1c2-d792-46f3-8f0e-1bb9a7f4c928"
        },
        {
          "id": "a8823de7-a7f2-4e12-b90a-211297dfe167"
        },
        {
          "id": "2720ddb3-8f06-483c-a50c-4a120977d99e"
        },
        {
          "id": "a91fee8a-1773-4c25-8931-b5e7ff3e2501"
        },
        {
          "id": "950234cf-f281-4e56-9c08-96e00aba9c50"
        },
        {
          "id": "48292fe5-6657-4e37-a286-a56da54ab01a"
        },
        {
          "id": "1937c008-4f8a-4ab7-9a69-714e1d03d863"
        },
        {
          "id": "7fbafcc1-d368-424f-998e-5bbe1e3ce1ae"
        },
        {
          "id": "6179cc67-da04-4c7a-bf8b-9bf4caa90f66"
        },
        {
          "id": "99943f44-8587-4376-add7-d47e30bb73c8"
        },
        {
          "id": "2b890d95-47fc-4314-a997-41977d9f88e1"
        },
        {
          "id": "dfc41b88-0567-49f1-a1e2-ec08e255e6e2"
        },
        {
          "id": "12ff3d80-eed7-42c7-b781-5abea3b1d0f5"
        }
      ]
    },
    {
      "id": "0f19563d-8709-4b74-9d5c-71e24dd3d1b1",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-09T20:00:00.000Z",
      "startAt": "2022-02-09T13:00:00.000Z",
      "inputAmount": "10",
      "prizeAmount": "212.5",
      "participantLimit": 25,
      "description": null,
      "external": 0,
      "name": "High Prize",
      "participants": 23,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoh22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 1,
      "type": 0,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-09T11:44:17.487Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-10T14:14:36.666Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "271e21ac-6dde-46c2-87e1-94c975571e6f"
        },
        {
          "id": "da3b306c-f4e7-4875-9919-11d32b57a336"
        },
        {
          "id": "a42bc821-daa1-41ed-bab0-df842f704224"
        },
        {
          "id": "016c1c4c-6cea-4a03-8bd8-4086e74e6f07"
        },
        {
          "id": "301fe7f3-4c1f-447a-9a9c-e73497bf5ea7"
        },
        {
          "id": "2c277573-628d-48c0-b381-02f87286a95b"
        },
        {
          "id": "b5e7963c-ad98-4c42-9579-0d3ad742049e"
        },
        {
          "id": "8e40772f-74cc-4de3-9707-f8eb6ec83fd7"
        },
        {
          "id": "b838ae91-531f-44ad-8e64-37186f8ebf46"
        },
        {
          "id": "d39c8380-ca95-4ef1-927b-711a004c0e84"
        },
        {
          "id": "b5956317-9d3a-4618-aa7d-1c84e272f1d1"
        },
        {
          "id": "b19c437f-a8e6-43e7-9945-3cec42057f5a"
        },
        {
          "id": "80d7eba7-3d76-4564-804c-bab3f1f16996"
        },
        {
          "id": "a93b5069-9a25-4a14-a479-73a8a89fbc1e"
        },
        {
          "id": "43e5f637-3631-4626-839e-433584dad4b5"
        },
        {
          "id": "d9265319-d6fe-46f4-9a04-d88318eaaded"
        },
        {
          "id": "75ee08df-6e78-46c8-b274-56e502ec64c3"
        },
        {
          "id": "6d51c46f-751f-432e-92ab-9fce8f35c491"
        },
        {
          "id": "d508590b-39f6-47c3-848a-bda45fd6889b"
        },
        {
          "id": "1f4a4a79-e88e-49b5-bd44-1cde2caca56c"
        },
        {
          "id": "e632d53e-9677-485f-8f2b-ef06326c5d34"
        },
        {
          "id": "7d16f426-159b-49ab-82b6-3819e800c1f9"
        },
        {
          "id": "11d418af-0d49-4392-95af-afb5149be78f"
        }
      ]
    },
    {
      "id": "e5eac8c7-8b21-4730-90d9-417c7eb1e1bb",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-09T20:00:00.000Z",
      "startAt": "2022-02-09T03:09:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": null,
      "external": 0,
      "name": "Daily Free",
      "participants": 100,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "wing22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-08T13:06:29.892Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-09T20:00:00.571Z",
      "active": true,
      "tournamentPersonList": []
    },
    {
      "id": "e888dd71-4776-4075-b609-1c2ae6a628c4",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-08T21:00:00.000Z",
      "startAt": "2022-02-08T12:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": null,
      "external": 0,
      "name": "Daily Free",
      "participants": 100,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoh22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-07T16:07:59.107Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-08T21:00:00.451Z",
      "active": true,
      "tournamentPersonList": []
    },
    {
      "id": "5e61899c-2396-472c-a585-5ce07e224848",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-04T20:00:00.000Z",
      "startAt": "2022-02-04T12:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": null,
      "external": 0,
      "name": "Daily Free",
      "participants": 85,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoh22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-03T14:58:03.010Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-04T20:32:50.355Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "df9360cf-61b1-4907-89c4-78c7c745d482"
        },
        {
          "id": "3446ccc9-0af6-493a-983a-a361f48503c8"
        },
        {
          "id": "45384fef-bd38-4db3-ab8f-0a5714778748"
        },
        {
          "id": "27999cdc-8abc-46ca-9f85-7e177d6ae5a2"
        },
        {
          "id": "d629e21b-8791-4d15-b4ee-2838acb4e458"
        },
        {
          "id": "d8809c71-3856-4b94-892a-e9c99f15f134"
        },
        {
          "id": "d1170d55-e7aa-4adb-8db3-b7d042706e8c"
        },
        {
          "id": "52352211-10e2-461e-81e8-bcbd47e7c931"
        },
        {
          "id": "6b2e7bd6-cecb-4580-9d1a-61b3411778f2"
        },
        {
          "id": "e1f09407-aaa1-48ba-93c7-93c86d640a04"
        },
        {
          "id": "02083cd8-c8c1-40f6-8bb0-e2cdec56948c"
        },
        {
          "id": "f8759392-6c1f-4aeb-b741-7e861bea7e83"
        },
        {
          "id": "43fe359c-dbe1-4e15-91a4-bb22b77397e7"
        },
        {
          "id": "72ce3ca5-a86c-4c6f-9d34-1d5a0e33afe3"
        },
        {
          "id": "c0e63faa-bf9d-4598-b62c-0363c890b9e3"
        },
        {
          "id": "15ff4a80-f120-4d12-a4c7-bdbecb90d6f4"
        },
        {
          "id": "32a9f6a3-2df3-4f38-b8be-bc809b84cb29"
        },
        {
          "id": "167ede76-b086-4206-8a70-2c1a89364618"
        },
        {
          "id": "c6c57bb4-d8a2-4554-9436-9a26bf770c2d"
        },
        {
          "id": "98459d0c-fbe2-48dd-9f3d-11d8ac3932d3"
        },
        {
          "id": "d7838433-7530-47f0-a6a7-e9e6a2f985a2"
        },
        {
          "id": "77369ee2-c79d-4670-9ed9-28b36f9d37ad"
        },
        {
          "id": "2bedae8c-8637-46ae-ba48-126ed7f1179e"
        },
        {
          "id": "40767b3d-831d-4400-964e-bef6f3d87d58"
        },
        {
          "id": "81f598cc-37f7-4eca-a1c6-8aed74d77bb0"
        },
        {
          "id": "06dc05f1-74eb-4cf3-866f-34060c80af2f"
        },
        {
          "id": "68fa732b-7d91-46a7-904b-e85b57405fff"
        },
        {
          "id": "dad0a9ac-d637-4e07-801e-24592477df87"
        },
        {
          "id": "b0e68d09-1e6d-407e-bdb8-f81ff17135c2"
        },
        {
          "id": "323bcc6e-92b2-43a1-953e-a9b20d076d78"
        },
        {
          "id": "ba866b9c-f77e-451a-9fe6-3b53ef132331"
        },
        {
          "id": "f62f6091-f0bd-4cbf-a16a-d453362fbbd6"
        },
        {
          "id": "c9b1141b-ae56-444a-9777-bebe52a99b31"
        },
        {
          "id": "56a2eba0-b000-4bb3-9c2d-9a61999159f8"
        },
        {
          "id": "7a80757c-08b4-4662-b93d-ed860f2da46d"
        },
        {
          "id": "b3953f6a-e533-4c0c-aea4-9fff8c71740c"
        },
        {
          "id": "ba439567-06b1-430f-a5dc-1d2ddfb29d6d"
        },
        {
          "id": "b59ea1f5-af96-48ba-aa0e-9b190d75f782"
        },
        {
          "id": "288335c9-f355-48be-9162-18ccf4ef02fc"
        },
        {
          "id": "dd30dad1-89cf-460f-8177-bd48b0ae08d2"
        },
        {
          "id": "0069355d-ff07-41a9-8395-ecfb844cd2ba"
        },
        {
          "id": "c7b0aaa1-bd92-40e1-a7db-2d31150de002"
        },
        {
          "id": "c5f3ba1b-a8c3-4947-9750-28f67954eb45"
        },
        {
          "id": "6ce41e7c-914e-43fe-b231-df9438f56c3c"
        },
        {
          "id": "53ecf327-a1e1-4151-b5b7-f75f530fb64d"
        },
        {
          "id": "c3caacb8-d7a9-4dc6-af0a-8d0a36e26b46"
        },
        {
          "id": "efa938af-08f3-41c1-8dda-1c629720d1d0"
        },
        {
          "id": "b86224c5-7909-4681-8fe0-dfd8cd70410c"
        },
        {
          "id": "58e0e8a3-4bde-4653-95e7-eed9a3a7052c"
        },
        {
          "id": "fa92e746-319b-4443-a7ab-2191961dce27"
        },
        {
          "id": "48f32658-a79f-4b90-a32a-947f4e1dbbf7"
        },
        {
          "id": "0ab621b3-d070-4754-90c9-50f413e2b764"
        },
        {
          "id": "2e2f8f57-8809-4a48-b5b6-cf004aa40ea6"
        },
        {
          "id": "28aee9a5-0108-4ee1-9ddd-73b1b6e865d6"
        },
        {
          "id": "50f082a5-2260-40a8-90fd-12c81e95ffcf"
        },
        {
          "id": "2a53f91c-30fe-4bfe-912d-b3efbcfc06d6"
        },
        {
          "id": "b0d79d26-0664-4df6-90c5-b975ef239d96"
        },
        {
          "id": "85f93e0c-5689-4d46-a52b-a8d83f2fa127"
        },
        {
          "id": "c1d3cb67-77bd-42bc-80d9-44b0f4fcb64a"
        },
        {
          "id": "c04d7d55-f2ab-47ab-9f7b-773ffbaea737"
        },
        {
          "id": "6d5244ee-2d3a-493a-bde8-e13c74a2f405"
        },
        {
          "id": "9ec5cb27-8071-4c33-931c-4cfd7ceef14b"
        },
        {
          "id": "e84735f6-5007-4892-bbcc-8d1ecbed5bc4"
        },
        {
          "id": "c09dcd18-5a6c-4694-a0b1-9231325511e3"
        },
        {
          "id": "b2ff007c-efe8-4ea9-8efd-4acd6a9bad14"
        },
        {
          "id": "b9135f20-6f74-4617-b672-7b5d06d65a56"
        },
        {
          "id": "5b53d350-1766-456e-9407-7d409d82740c"
        },
        {
          "id": "49da52b9-df70-4e01-b619-61a1b464ce62"
        },
        {
          "id": "a7943d1c-bdea-42d6-99cc-ef4fbba39de1"
        },
        {
          "id": "ee0e9641-d0fc-441b-bded-1179788b95a8"
        },
        {
          "id": "14294020-2eaa-4f94-a67f-71187b223ece"
        },
        {
          "id": "7cb6f52e-0067-4dbf-91d0-cf3b76eefcbc"
        },
        {
          "id": "e89a97b2-1035-4fbe-ab11-8c34f50a8b14"
        },
        {
          "id": "5f4b00b2-74bd-47d9-92f9-ba1e1b940ff2"
        },
        {
          "id": "e38b4075-e454-4dd2-94ba-951c2f692d1b"
        },
        {
          "id": "7ce4fac3-cdfd-4a78-ba6a-a5833d4a55ad"
        },
        {
          "id": "0230d8b9-0ef7-49dd-80cd-ca9844332bec"
        },
        {
          "id": "24d51ad4-c3d8-4a66-b196-b16e8da29f0b"
        },
        {
          "id": "cb4d7e18-2d44-4c17-9f75-09a939decba6"
        },
        {
          "id": "a37cb4c2-492a-48f8-af50-3db63e9d538e"
        },
        {
          "id": "462feb0e-9c04-4cc2-83b9-30785a914d22"
        },
        {
          "id": "97ba78a5-0a37-44ac-855a-94be79e91162"
        },
        {
          "id": "2d715340-10d6-4aab-a1c3-2089e1d8cf16"
        },
        {
          "id": "931a2203-8e75-453d-846d-0cf82f9f6a98"
        },
        {
          "id": "4f72f5b4-dc6d-460f-a982-653578188eb4"
        },
        {
          "id": "03443cc7-323f-4463-b816-bb8850478a95"
        }
      ]
    },
    {
      "id": "03b5542b-aa4d-4ba8-b75c-4c48d9fbb539",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-02T20:00:00.000Z",
      "startAt": "2022-02-02T13:00:00.000Z",
      "inputAmount": "20",
      "prizeAmount": "850",
      "participantLimit": 50,
      "description": null,
      "external": 0,
      "name": "All Win - Quarta",
      "participants": 27,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "wing22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-31T11:50:01.119Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-02T20:00:00.511Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "cb980927-160e-4603-8722-0f70e8c67a2c"
        },
        {
          "id": "d0fb939c-f64f-41f1-8662-cf3bece64352"
        },
        {
          "id": "59d8baff-9141-4e9e-aab7-e07917813aa1"
        },
        {
          "id": "97c0f8a0-75dd-424c-96cf-4672b732b103"
        },
        {
          "id": "0bdbf177-03d5-4f8a-b181-ecb7326d04b4"
        },
        {
          "id": "b6ddb70e-9fea-447b-8ab7-a7c6e2b7bdd3"
        },
        {
          "id": "5809bee1-c4e2-4bfe-ab6a-53ef1212ba29"
        },
        {
          "id": "d7f4cc52-fce7-424d-85fb-7b00f00387ce"
        },
        {
          "id": "b9b8e9ef-150f-41a6-9995-5dd6c506409c"
        },
        {
          "id": "06d77dd8-93be-400d-a75b-d508c9ae9775"
        },
        {
          "id": "c2c2cb7f-257e-47cf-8370-a2c3b710f549"
        },
        {
          "id": "a14abc15-f312-41d8-8e25-feffa2d7b0db"
        },
        {
          "id": "ba61877e-fb39-4518-b858-db600a57a5ad"
        },
        {
          "id": "8df12bdd-442b-494c-a6d6-0b4aa31e3246"
        },
        {
          "id": "0f25b4ad-ffc8-46cf-82d1-22e4328b58ed"
        },
        {
          "id": "bbe8d337-abaa-4676-83c2-9bd36b40e8e8"
        },
        {
          "id": "aa27c3ac-4012-4b9b-b1b9-7780cdf9140a"
        },
        {
          "id": "e6629296-29f2-4232-be14-0459cd07a137"
        },
        {
          "id": "f3fbf78e-190a-4417-8835-8f5a96c6c622"
        },
        {
          "id": "9e6ca8cd-9af6-4085-8d8d-9e58ef2ae74b"
        },
        {
          "id": "49322592-ad8b-416c-86ec-dd1605d13399"
        },
        {
          "id": "b12b2843-76c9-4951-ba22-464c5d993479"
        },
        {
          "id": "a927371f-b494-47f2-b04e-6083cf5ef27c"
        },
        {
          "id": "41779f25-77aa-44db-816e-fc82ec9c7a8a"
        },
        {
          "id": "1890552d-44db-4c68-83e4-966eb3d1be12"
        },
        {
          "id": "53c91d16-110b-4053-92c7-33df20bd2fa8"
        },
        {
          "id": "92d1c418-ba97-4ddb-b869-a0bafe13c70e"
        }
      ]
    },
    {
      "id": "d1d43d0b-bfd4-4ad8-b88e-4575ed7081d0",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "10000",
      "status": 2,
      "endAt": "2022-01-28T20:00:00.000Z",
      "startAt": "2022-01-23T12:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": "Teste longa duração afiliado",
      "external": 0,
      "name": "Teste longa duração afiliado",
      "participants": 15,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdog22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 100,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "3000",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-26T14:31:38.652Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-11T16:10:00.800Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "48d1278f-bf0d-4824-9c0a-b164e2a260c7"
        },
        {
          "id": "761df738-31e6-4b17-800c-8b5eb98546ea"
        },
        {
          "id": "9b5c767c-0b33-4eff-b071-62a693f45a1c"
        },
        {
          "id": "5bf73545-168c-43b8-94c8-fb11a04a700c"
        },
        {
          "id": "c6d62038-7357-486a-b27b-b1b0ec863e10"
        },
        {
          "id": "8e55f1df-12b7-43ab-b826-285b0168568f"
        },
        {
          "id": "3dbd8f7d-f2e7-42ce-8e36-2b84d54eff7d"
        },
        {
          "id": "639e8928-3ecf-40d0-b882-edb037a32707"
        },
        {
          "id": "89e80c08-cd59-454a-b1ae-b7f780133bbe"
        },
        {
          "id": "913885b2-de1f-49b3-9503-78d5c7fc26ff"
        },
        {
          "id": "eb396523-7fb0-453b-a973-e1d08e81df9d"
        },
        {
          "id": "4e3360e3-1caa-44a4-8fbc-10a2e5a9e3b8"
        },
        {
          "id": "3d8ac179-c26b-4c80-81f5-c8d565dc0c44"
        },
        {
          "id": "4c244da5-7e65-4922-9e9a-b55b71b24a57"
        },
        {
          "id": "7ff55b0b-51e6-48c5-b6d9-f19efe535a4c"
        }
      ]
    },
    {
      "id": "df89a835-47d8-490d-b462-79ad90128655",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "10000",
      "status": 2,
      "endAt": "2022-01-26T20:00:00.000Z",
      "startAt": "2022-01-26T12:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "Teste",
      "external": 0,
      "name": "Teste Afiliado",
      "participants": 2,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdog22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-26T14:07:49.094Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-01-26T20:00:00.659Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "b8fe6168-a2d0-4b62-b284-7be48f9dfc3c"
        },
        {
          "id": "c766e52e-a4eb-4fea-beb0-b018cd4261ff"
        }
      ]
    },
    {
      "id": "fecacd55-fbc7-4c3a-9634-570723e61739",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-01-29T02:59:00.000Z",
      "startAt": "2022-01-21T03:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "TESTE",
      "external": 0,
      "name": "TESTE",
      "participants": 26,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdog22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "5000",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-21T19:56:53.479Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-01-31T11:00:10.347Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "d43cecc7-099f-4772-91f1-59040067e553"
        },
        {
          "id": "e0c0697f-cf2b-4cd8-8c16-ee427a0d7a18"
        },
        {
          "id": "548488fc-0243-447e-b1d1-25f810d6f45a"
        },
        {
          "id": "2ca49208-6934-467f-9d28-e8bfd7e36046"
        },
        {
          "id": "174e4963-c4f8-4a44-a6ca-9fef94353b49"
        },
        {
          "id": "df76f335-cfed-46d5-8b86-19d288fd1c3f"
        },
        {
          "id": "5ed4ab21-0de0-4baf-9880-067d546e30fe"
        },
        {
          "id": "89c032c4-f0fe-442f-8909-918cbdcb66c9"
        },
        {
          "id": "89e8e2cf-4397-457d-8d0d-98d243961a95"
        },
        {
          "id": "f6fd558b-54c8-407e-831c-731d057b223e"
        },
        {
          "id": "d0ed1346-82ea-47d1-95fb-b86afc61c43c"
        },
        {
          "id": "26f00d80-df13-436f-8574-fd8cd60b218a"
        },
        {
          "id": "53fe034c-84c1-41ed-b44e-79c96aba71f8"
        },
        {
          "id": "2b898916-face-4426-9df8-4051890009f2"
        },
        {
          "id": "78ac43c7-1d1d-47a5-93e7-91b1a752d5bb"
        },
        {
          "id": "f60908cd-9b2c-4d92-b277-e135dd8edbcc"
        },
        {
          "id": "e816d37a-9e7c-49f3-a35e-ef5f78584ac5"
        },
        {
          "id": "de337d8a-54d1-44a8-9dd7-3736a4011bea"
        },
        {
          "id": "9f3faf11-579b-48f7-87a8-8b19fea3c66f"
        },
        {
          "id": "9bd7408b-59a8-486c-900d-df0266f645a0"
        },
        {
          "id": "e4dea777-cb89-478d-8ee7-ad11d55eca13"
        },
        {
          "id": "5f64f529-ede0-4490-864d-fdbf9c08a22d"
        },
        {
          "id": "27107c20-af4d-4460-b358-43fafc79b946"
        },
        {
          "id": "09590ed2-64dd-4b91-9d8f-f9e761d0293b"
        },
        {
          "id": "7752bfff-b954-4edf-b76d-fca97937dbe1"
        }
      ]
    },
    {
      "id": "06ae17b3-729d-44ac-b2ba-533a1c1897f5",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-01-11T17:59:00.000Z",
      "startAt": "2022-01-11T03:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "TESTE PH",
      "external": 0,
      "name": "TESTE",
      "participants": 0,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoz21",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 20,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "6000.02",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-11T17:57:32.097Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-01-11T17:59:00.549Z",
      "active": true,
      "tournamentPersonList": []
    },
    {
      "id": "af839525-fb01-4f85-ac23-66f52c329521",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-03-13T17:57:00.000Z",
      "startAt": "2022-01-11T03:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "TESTE PH",
      "external": 1,
      "name": "TESTE",
      "participants": 25,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdok22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 20,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "6000.01",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-11T17:55:08.754Z",
      "updatedBy": "1ba39304-fea7-4dad-a25d-3d1d8820c3c3",
      "updatedAt": "2022-04-11T11:57:29.544Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "c1e4de0b-7c53-4a8e-9488-2e6e7b458795"
        },
        {
          "id": "ed396a41-ffd9-4383-8ec2-7d05a5b50206"
        },
        {
          "id": "894c0ed3-4298-4628-9dd2-93f4587cdafe"
        },
        {
          "id": "237a0c3e-afe1-460a-9627-0b1389bf4e55"
        },
        {
          "id": "a6f167ca-0514-4514-b72c-f0501509072e"
        },
        {
          "id": "2c7a0267-ce1a-461a-ac96-ccc8d8bf7897"
        },
        {
          "id": "c0858f73-f012-44cf-83c9-47eebc2bc215"
        },
        {
          "id": "9831ee0f-504a-464b-b873-5ab48fd72b0c"
        },
        {
          "id": "85435901-da37-48de-bc3d-09aea5e1111f"
        },
        {
          "id": "6b5e69fb-33c4-434c-8a78-3538a6e91e8b"
        },
        {
          "id": "dc004f92-9997-4b5e-b1f3-d10c9d2f9a7c"
        },
        {
          "id": "4eac5ff2-b49a-450e-b883-557bd6d4467b"
        },
        {
          "id": "72a78c30-ad5e-4e5e-b5f6-3727c0c11ad0"
        },
        {
          "id": "61ed43c6-6d5c-47dd-ba4d-4989d7b461d2"
        },
        {
          "id": "03fde7f3-5677-4e43-a413-666b25aa243b"
        },
        {
          "id": "be3ff623-8b2e-4209-b89a-a5caff359276"
        },
        {
          "id": "7f8384a7-8d69-4d36-973f-9d46f89f3d72"
        },
        {
          "id": "5af908b5-4ced-4747-a0df-4b8a01847a10"
        },
        {
          "id": "216d0ecc-771b-4f30-b652-17aeebdaf523"
        },
        {
          "id": "abe9ae15-53f7-471d-a081-e9bde8304174"
        },
        {
          "id": "782c7481-84f1-465b-90c8-e190c73186b9"
        },
        {
          "id": "e311d71f-183a-4f69-b737-fea1ac1dff36"
        },
        {
          "id": "029cad43-0c5a-46a4-abcf-34290887634c"
        },
        {
          "id": "bd071225-e42d-4d7f-9471-b91f5e344414"
        },
        {
          "id": "463998cf-30a4-4fe9-8c26-6f4a54ac585f"
        },
        {
          "id": "06e84f28-48f1-4390-970b-53e2909595f6"
        },
        {
          "id": "e39979e7-571d-49d5-b1a0-90cdfbd0310d"
        },
        {
          "id": "28e491d9-771e-463e-83f0-1662fe145900"
        }
      ]
    },
    {
      "id": "bb37994e-9cc2-4115-9bb1-afd706d76705",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-01-10T21:00:00.000Z",
      "startAt": "2022-01-10T13:00:00.000Z",
      "inputAmount": null,
      "prizeAmount": null,
      "participantLimit": 25,
      "description": "",
      "external": 0,
      "name": "TESTE",
      "participants": 0,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdog22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "0",
      "createdBy": "fee89865-6b57-4631-8e02-a4014d327945",
      "createdAt": "2022-01-10T20:06:43.313Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-01-10T21:00:20.958Z",
      "active": true,
      "tournamentPersonList": []
    },
    {
      "id": "b98872b3-1496-4f27-b971-9d65e5b9e583",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-01-07T16:05:00.000Z",
      "startAt": "2022-01-07T16:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "Teste Torneio WDO",
      "external": 0,
      "name": "TESTE",
      "participants": 3,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoz21",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 20,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "0",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-07T15:59:09.516Z",
      "updatedBy": "66f41a17-42a0-4390-b362-821dce4e286c",
      "updatedAt": "2022-01-07T16:05:40.800Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "55fc6d97-4573-4c11-928d-cd54d257a8e6"
        },
        {
          "id": "38f9ae42-026f-4d55-91bf-932bbe0df485"
        },
        {
          "id": "f7229841-ef68-434b-b2e1-2bd2911a9814"
        }
      ]
    },
    {
      "id": "cc70df89-089b-4499-b481-434469f2d7c7",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-01-07T14:25:00.000Z",
      "startAt": "2022-01-07T14:05:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "Teste de criação de torneios pelo afiliado",
      "external": 0,
      "name": "TESTE",
      "participants": 1,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "winz21",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": "0",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-07T14:03:43.672Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-01-07T14:25:00.504Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "f55bc26c-47b3-4bd7-aae2-be195395dca1"
        }
      ]
    },
    {
      "id": "0fb66284-2acc-4241-ab18-6628c2dfa48e",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-01-07T14:25:00.000Z",
      "startAt": "2022-01-07T14:05:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "Teste de criação de torneios pelo afiliado",
      "external": 0,
      "name": "TESTE",
      "participants": 2,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "winz21",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": "0",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-07T14:03:27.113Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-01-07T14:25:00.519Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "635195d2-d2c6-49ef-bc56-bd9514ebd919"
        },
        {
          "id": "3a2edb25-0868-4df0-8554-088495b23e70"
        }
      ]
    },
    {
      "id": "0094f84a-aca7-44e7-be39-143895097379",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "6000",
      "status": 2,
      "endAt": "2021-11-23T20:50:00.000Z",
      "startAt": "2021-11-23T20:36:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "Torneio criado para testar resoluções de bugs.",
      "external": 0,
      "name": "Teste - ajuste de bugs",
      "participants": 0,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoz21",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "0",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2021-11-23T20:36:43.912Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2021-11-23T21:51:12.488Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "2c211398-4065-4393-a847-e9db1cce7f9f"
        },
        {
          "id": "68bc91d1-7992-48a5-afe4-d333fbeaccf1"
        },
        {
          "id": "0be5b7de-c949-4f98-92f8-acd0cbc54ba9"
        },
        {
          "id": "d35f4990-8413-4d31-9898-ff1f027e8695"
        },
        {
          "id": "ddadeff7-c923-453c-90f1-559a4bcc73c0"
        },
        {
          "id": "0bab7234-2ff1-49e4-b2b5-198bad45a6f3"
        }
      ]
    }
  ];

  finishedTournaments = [
    {
      "id": "c73dc47e-8cb0-484b-8760-a628e4259284",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-03-10T20:59:00.000Z",
      "startAt": "2022-03-10T03:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 50,
      "description": null,
      "external": 0,
      "name": "Daily Free",
      "participants": 32,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "winj22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-03-10T12:00:14.819Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-03-10T20:59:01.293Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "97feb5a0-da88-4f76-a987-6d05dc4fb463"
        },
        {
          "id": "5bb92d24-c472-4a74-8451-32b3510219a5"
        },
        {
          "id": "df7ff03f-30e6-499b-95b0-eb2dd551441f"
        },
        {
          "id": "85aefbdc-4ec3-40a1-a3b0-a9e26c70a402"
        },
        {
          "id": "047a11a8-84c4-4816-a846-b3b40dd299fb"
        },
        {
          "id": "02ee63dc-f0d7-4ce7-a7d6-624eb2b70591"
        },
        {
          "id": "e7ef4f13-a678-42d7-8552-a96026803b1d"
        },
        {
          "id": "0e9c678b-20bf-47d5-b6e9-c8d9a66bc6ad"
        },
        {
          "id": "08a09778-6054-4bc0-8543-1ec1954382ce"
        },
        {
          "id": "595fcfcb-baec-4cf0-abce-18af13632410"
        },
        {
          "id": "9a06eec0-605e-4c9c-9d08-388aa4097cad"
        },
        {
          "id": "74d68a44-01eb-4b14-9f84-5ea21748c68d"
        },
        {
          "id": "21e84ebf-facf-4ff5-90a5-29318b6ebcd1"
        },
        {
          "id": "d3e1edb2-b5c5-45b0-9eea-40bb16a3c780"
        },
        {
          "id": "9126250c-edcb-497e-8205-a453e965c121"
        },
        {
          "id": "4eae7d4b-4932-4962-a08e-68d1447827c1"
        },
        {
          "id": "884e9d73-1b93-4819-8af4-5befca82204d"
        },
        {
          "id": "368d25e5-dfa0-4674-b33b-ca8cdbd5f6cd"
        },
        {
          "id": "8eedd477-e4e5-466e-ad6f-0bf44c8d9993"
        },
        {
          "id": "7d477bd0-3176-4d46-a8a6-278d1df51a99"
        },
        {
          "id": "615c8215-57fa-45b9-9a47-51dcc9172a7a"
        },
        {
          "id": "155989e9-6e16-47bf-8c84-461f5c99a9ba"
        },
        {
          "id": "58565626-e7c0-435b-a2a1-4f8089b522d6"
        },
        {
          "id": "05d05db1-f22b-4ea8-b0df-8bab4e879ccd"
        },
        {
          "id": "b893a46b-91fb-420e-8cc1-af9ff8dcd296"
        },
        {
          "id": "f208e04f-a682-4ff3-8fa0-c5f433e61ec7"
        },
        {
          "id": "5eb5664f-146f-4cf2-9a23-1592b39120eb"
        },
        {
          "id": "ee11fcca-87b5-4fc4-aaf1-25155ad8a1ed"
        },
        {
          "id": "dc744c85-8386-46cf-b4c0-d1e7f8cd7208"
        },
        {
          "id": "c71de0c0-f02c-4fdf-92ff-0aa1ab343c1d"
        },
        {
          "id": "1e850e9b-14e9-4ce1-8129-07f579bea437"
        },
        {
          "id": "4ec97559-fd66-4324-a604-5937127cdf1d"
        }
      ]
    },
    {
      "id": "5b380466-60ae-46ff-b7bb-fc02aa272afa",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-03-03T23:59:00.000Z",
      "startAt": "2022-03-02T03:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": null,
      "participantLimit": 25,
      "description": "Teste",
      "external": 0,
      "name": "Torneio Teste",
      "participants": 6,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoj22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 20,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "5000",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-03-02T17:18:09.328Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-03-04T17:47:30.737Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "94371366-b61b-4e80-9522-2e92061eca3c"
        },
        {
          "id": "9d87ad5a-e8e0-4380-a94c-a633ead523ad"
        },
        {
          "id": "851ccb5d-2a84-47ff-8c97-ca4762ac1906"
        },
        {
          "id": "5baa2c91-e156-406a-b151-8f5caac1b9c3"
        },
        {
          "id": "af013001-3fb8-4fbf-bdd8-6e727009de39"
        },
        {
          "id": "584e1a04-fa7b-4b11-9b5b-e06ebe41e2f4"
        }
      ]
    },
    {
      "id": "fed5a89c-2c95-4c5c-adb0-b5f98024ea01",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-03-01T02:59:00.000Z",
      "startAt": "2022-02-28T03:00:00.000Z",
      "inputAmount": "10000",
      "prizeAmount": "212500",
      "participantLimit": 25,
      "description": "Torneio de teste para implementação e teste de funcionalidades.",
      "external": 0,
      "name": "Teste",
      "participants": 0,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoj22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "5000",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-24T11:46:22.160Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-03-01T11:00:00.569Z",
      "active": true,
      "tournamentPersonList": []
    },
    {
      "id": "43177167-25dd-43b7-a40f-0ce0b180d4b1",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-21T20:00:00.000Z",
      "startAt": "2022-02-21T03:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": null,
      "external": 0,
      "name": "Daily Free",
      "participants": 71,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "winj22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-18T15:10:40.174Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-21T20:30:27.449Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "437c302c-5fcd-48ea-a736-c111c3281d2c"
        },
        {
          "id": "798e9e97-3aad-498f-9867-0e1cc84ad89f"
        },
        {
          "id": "97032eac-d750-4e66-9c53-427a5c5bda35"
        },
        {
          "id": "52c30f6b-89f6-4b58-b2e4-bd612ea8b5b7"
        },
        {
          "id": "98e5c4db-0a00-4ef8-a82e-dda17f0215cc"
        },
        {
          "id": "0006492f-8d65-4d99-8768-e7e99cdd06be"
        },
        {
          "id": "90b3208a-4ae9-414f-b240-322ace410072"
        },
        {
          "id": "7d06aad1-d8e5-4328-b212-08769187e2e1"
        },
        {
          "id": "00993ff8-689e-4bea-9288-3e731d428f70"
        },
        {
          "id": "464aedb0-90fe-40fd-8383-03a48c8bbf56"
        },
        {
          "id": "261b0255-cb29-4dbc-afbc-b11aadd6de7a"
        },
        {
          "id": "78f33a1d-2750-4639-9007-9b364d7617bd"
        },
        {
          "id": "080b0dad-b288-4b15-8c2c-95f2b0c834ca"
        },
        {
          "id": "0a7642a4-8854-4a49-8704-9b33a696a505"
        },
        {
          "id": "6e0ac49d-138f-4aab-b3c9-3a2f806691ad"
        },
        {
          "id": "6d605577-033c-4b64-98ff-46ceaf02c0ce"
        },
        {
          "id": "808604d7-1d28-4755-a329-1d426e107f36"
        },
        {
          "id": "a6cac852-2a65-4bff-8802-9da1ebb9415f"
        },
        {
          "id": "68a7171d-8ccf-41a6-a2b7-84abc588baf9"
        },
        {
          "id": "2cf096fd-4123-4b31-97e6-f3fc51f4c7f3"
        },
        {
          "id": "1264616f-fa87-468d-8b06-20d9396da483"
        },
        {
          "id": "47c2668b-2d2d-42c5-8ce9-639bbe4b38e1"
        },
        {
          "id": "dbd9e10f-752c-48fe-ac70-7473df395d7a"
        },
        {
          "id": "124a20a9-bd5f-453f-9c29-1107e27ef254"
        },
        {
          "id": "4215104e-ac3e-4736-a75a-742c9a0abd50"
        },
        {
          "id": "6f8df3c1-0d52-478c-8f6e-d00a56192922"
        },
        {
          "id": "344cb6ac-b09f-42d0-9805-565173d68a86"
        },
        {
          "id": "8f1cc2f1-7eeb-4781-92f7-e2061e2d3677"
        },
        {
          "id": "7f22c781-3a24-4fd2-bee4-c10f1a0e6dff"
        },
        {
          "id": "7cf7ad80-893e-4524-ad96-2aaf7398c0c8"
        },
        {
          "id": "333911da-5424-4d58-8857-5ab46f678323"
        },
        {
          "id": "935bc91d-bb95-46ae-8118-def7b3bd7dc1"
        },
        {
          "id": "fcd9d10f-d749-4f66-bd39-5f34f7d4ebc2"
        },
        {
          "id": "20798f77-9456-4ccb-a20c-1f65a87d717b"
        },
        {
          "id": "57fc49eb-3ca6-4482-b473-eb94247edd21"
        },
        {
          "id": "9252a4ee-4e5b-4eb4-b6cb-134e4d0af752"
        },
        {
          "id": "9b0bd0cd-1951-4294-93a2-8b51ebb41a2e"
        },
        {
          "id": "106b07b5-ff17-436c-b7a7-d9f29ee2538b"
        },
        {
          "id": "2307572e-3deb-4e7a-a213-84d4aa4dd182"
        },
        {
          "id": "63049cbd-6906-4f9c-a489-849fdf958036"
        },
        {
          "id": "55a5ac9e-4236-4938-b17b-2fe0c5125faf"
        },
        {
          "id": "27791364-90e5-4f2a-8e5d-ecb7081ab7cd"
        },
        {
          "id": "83318106-6c61-4b2e-b032-948136721512"
        },
        {
          "id": "1b924a94-2c4f-49bd-ae2f-947f003c865e"
        },
        {
          "id": "10ec9478-46e8-457f-b5fe-aa76d5bbeaa5"
        },
        {
          "id": "069aa999-5519-4466-aae0-cc7f18235184"
        },
        {
          "id": "96fd886b-d428-459b-873e-f9f812c84b28"
        },
        {
          "id": "2dfd1d63-eba9-456e-849c-e145edd1c370"
        },
        {
          "id": "fb053a31-ff72-4892-83d9-7b0fd7e90205"
        },
        {
          "id": "0fbadf5d-6c68-4402-9b3c-1851a691056c"
        },
        {
          "id": "f651e4bf-c363-4cd7-9175-b92fda0450c9"
        },
        {
          "id": "023b7614-20d5-44db-afa8-3f1c4ff67197"
        },
        {
          "id": "75773cd0-b65a-48c4-930a-db87b9f856c7"
        },
        {
          "id": "2d9c16bc-ee66-4f47-809c-fe688878576d"
        },
        {
          "id": "7b2a1a02-2422-444b-a937-bd5d599251e3"
        },
        {
          "id": "01ca1b94-7269-492d-b104-534abb5ad34e"
        },
        {
          "id": "7d0cbe90-4fbc-4789-83fb-db789bbf1fe0"
        },
        {
          "id": "c51ed174-bc3c-48a0-a7d0-fa909fdb99d0"
        },
        {
          "id": "bcc4abbd-ffa0-4e18-8fa3-00f298ae9a59"
        },
        {
          "id": "abebf288-85d4-4683-aea4-253d3053bb4e"
        },
        {
          "id": "a74859b8-8995-4da2-be55-c89de6e8c9f0"
        },
        {
          "id": "59fec05c-3155-4f9e-8816-676429c9e7bf"
        },
        {
          "id": "e61caacc-d752-4ed8-b0e8-5f8d91c95c2e"
        },
        {
          "id": "0da9a6fc-4332-4c66-a235-5b6197465a9e"
        },
        {
          "id": "f1caa4ad-4138-420a-9a1f-61decab1a506"
        },
        {
          "id": "53d76f2f-23a2-466b-a0c9-9f5e1329411b"
        },
        {
          "id": "b0df3c36-864e-424a-9573-81108472609f"
        },
        {
          "id": "5fb11dc3-0ae0-4dac-9182-e9d9f57b5b48"
        },
        {
          "id": "11b27eaf-ccb9-4193-a0a1-2bf6c21ff25c"
        },
        {
          "id": "8d735602-390f-4bc4-b128-172a893825f0"
        },
        {
          "id": "08c79287-169c-4967-8f70-a64cfe8e4001"
        }
      ]
    },
    {
      "id": "7ef829cc-a86f-48ea-bc61-e2fbeb8e9622",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-18T20:00:00.000Z",
      "startAt": "2022-02-18T12:09:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": null,
      "external": 0,
      "name": "Daily Free",
      "participants": 49,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoh22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-17T17:27:03.268Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-18T20:30:22.451Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "9c32b235-7be7-4753-8d0c-d670add278b8"
        },
        {
          "id": "88d3cf45-c669-424f-92ab-e3378dbb4986"
        },
        {
          "id": "f276b253-9f01-4476-9d5b-1216bdab4e5b"
        },
        {
          "id": "3c27c5c3-f2a5-432a-a242-30e53e387b87"
        },
        {
          "id": "e0e2cbf8-a0d4-4764-bf93-5a8916bc9e98"
        },
        {
          "id": "ea229717-5401-4f65-b7e2-485791f391f3"
        },
        {
          "id": "242cbbf2-4c7a-46bc-9619-89a90dd526f5"
        },
        {
          "id": "5cd164c1-52cc-47cd-8132-c7861a11649c"
        },
        {
          "id": "61e70405-9fc3-40cd-91c0-772dc5bfa01a"
        },
        {
          "id": "45d1c2a6-221d-4f51-b75f-cc0de9441bb7"
        },
        {
          "id": "a7cbcf12-26e0-4e6e-a04f-0b1dca3bd6bb"
        },
        {
          "id": "7caa5c7d-1d75-4112-a859-3e103d655215"
        },
        {
          "id": "544c53b7-a431-41d7-a2f3-258b97e62e97"
        },
        {
          "id": "eefda8b8-d88d-46f5-bd32-54dac4d6870d"
        },
        {
          "id": "10b89232-66fa-4099-a881-2565d6e1ecc6"
        },
        {
          "id": "b744422d-c11b-4f11-95da-14dc60ccdcc4"
        },
        {
          "id": "794a6467-a456-4a24-a24d-6b72d1614693"
        },
        {
          "id": "353d3576-97d8-4907-a69b-59c8d4f62e81"
        },
        {
          "id": "758e4c5a-e3d6-435f-8648-db857c845f71"
        },
        {
          "id": "989f5745-41a2-45d9-a706-0825bc13e2ca"
        },
        {
          "id": "fdacc0b2-4606-49c1-8bb9-56b75dd4808b"
        },
        {
          "id": "11c33fc1-9a05-42a9-b328-97c86ab8b273"
        },
        {
          "id": "d90f7b27-c0b7-4a15-b2c8-53feaac54e42"
        },
        {
          "id": "8cdffa8d-b74f-4afd-afb2-58c6cfa23be9"
        },
        {
          "id": "0669923e-356e-4a3d-bb15-adafe3d08e86"
        },
        {
          "id": "a036a98c-f8e1-47e3-a6db-bb346cf39720"
        },
        {
          "id": "feac85b4-b880-4170-81ae-6e01ad0105da"
        },
        {
          "id": "17d60ed4-65ff-428a-abce-8244a25d7422"
        },
        {
          "id": "be95a0f0-a66a-4359-b1cd-c4293d26a9ad"
        },
        {
          "id": "c1acbd4e-7317-4284-a48b-5f79a06fcb23"
        },
        {
          "id": "6f35b99e-b54d-4ea3-8b23-ff97033f0850"
        },
        {
          "id": "8799a11d-aa52-4b47-9d66-4006667472e1"
        },
        {
          "id": "aa12c2f0-894d-4951-aa81-bebc7c6f0615"
        },
        {
          "id": "b79f12a6-c275-4269-8aba-ad2e470f6732"
        },
        {
          "id": "d1e1d8d8-754a-4c32-9c32-f527a6468e01"
        },
        {
          "id": "189a60a0-d502-4636-9c79-cfc5f123b213"
        },
        {
          "id": "e2633e22-f23b-4475-bae7-93adb00b0ec0"
        },
        {
          "id": "42be2141-25ed-480b-b08b-1e1d628409f5"
        },
        {
          "id": "773d4af7-562a-4bac-b9d7-ae155e5a8dc7"
        },
        {
          "id": "cecf443c-0c5d-4c41-b719-53abbfe303fb"
        },
        {
          "id": "2c3e8eee-1ece-4d44-906c-355cfa9f014e"
        },
        {
          "id": "a80f92b0-33ec-44f3-a2f3-c97d8fde3cea"
        },
        {
          "id": "f9f7dffe-18e9-4e44-9f2f-a01fbe52451a"
        },
        {
          "id": "53c3a36f-db91-4020-b72e-15530ce766ff"
        },
        {
          "id": "88c95145-ab19-4529-bd0e-400ca6a0ca44"
        },
        {
          "id": "2719f412-0150-49f7-ad47-7c7d7decfb26"
        },
        {
          "id": "a4cc105d-6ed1-416e-a5c5-3e8578a1f3f1"
        },
        {
          "id": "743bccb5-80ec-469b-b0c0-20b32f49d213"
        },
        {
          "id": "681b2146-e2aa-4f90-b9da-b2a6c4562802"
        }
      ]
    },
    {
      "id": "eab2ef54-5bb4-4893-a03c-877257e871d2",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-18T20:00:00.000Z",
      "startAt": "2022-02-18T03:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": null,
      "external": 0,
      "name": "Daily Free",
      "participants": 59,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "winj22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-17T17:26:01.697Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-18T20:30:10.777Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "e9e526cf-6629-4040-b84c-3a10591593b6"
        },
        {
          "id": "d87d7639-81de-43db-9311-76299324bce6"
        },
        {
          "id": "f1927074-72a2-499d-8ae7-0cbee062535c"
        },
        {
          "id": "1cc366b1-7dde-4bf0-a446-85a149829696"
        },
        {
          "id": "fce87412-686b-49f5-ac69-42db99c3f1f4"
        },
        {
          "id": "f218b997-8c39-4a67-a1e0-502e069798e5"
        },
        {
          "id": "d27b6a56-1366-4de8-9d9a-5bc952578ba5"
        },
        {
          "id": "a81ad0c3-e285-4ce0-a89c-c404c793fbbe"
        },
        {
          "id": "42833639-57f6-4893-9dc3-54f69979dc93"
        },
        {
          "id": "a01be806-36e2-49ea-8ac8-dfb51b20cf0e"
        },
        {
          "id": "b17f4a9c-5b23-4ed5-997e-40f36c2696be"
        },
        {
          "id": "a1d95431-910f-4282-8610-e1b7b7d4cde0"
        },
        {
          "id": "f5478e0b-fa40-4c7a-8c73-819d4a73408b"
        },
        {
          "id": "59e9431e-7651-43e9-a591-e71d9e07c78b"
        },
        {
          "id": "e9b42286-0346-4889-abfc-cc0d6159a224"
        },
        {
          "id": "fc62833a-7f8f-42bf-9c06-f92673d44b65"
        },
        {
          "id": "e20c196a-5081-4da2-8c6b-57f8d3ed7522"
        },
        {
          "id": "8738b32f-ae9a-4a8f-87b8-f22d5ed693cd"
        },
        {
          "id": "f947689a-7800-4834-a595-1b1772b8fa8d"
        },
        {
          "id": "94ac5c1a-1615-4a74-9b66-ee6ff67113b1"
        },
        {
          "id": "716eb007-220f-4a0e-9869-2f081a7bf411"
        },
        {
          "id": "dd10e87e-3886-416a-9bee-8f1eecdc9201"
        },
        {
          "id": "595d9c60-1b36-4870-a940-6e582ede6daa"
        },
        {
          "id": "f12d3497-e94d-47d2-83a6-5a76bdb142ab"
        },
        {
          "id": "a72c8df8-f769-44ab-96f3-74266cb5d584"
        },
        {
          "id": "576957a3-db3f-40e4-8805-9895b53b4dc5"
        },
        {
          "id": "0c01e217-9aa3-43c7-a10e-3230541029ce"
        },
        {
          "id": "c061f812-ed25-421e-8474-a9d885c3e796"
        },
        {
          "id": "f3b933c5-1b9e-4c0a-a7d4-d738bbe64a82"
        },
        {
          "id": "0eb31a36-0c81-402d-aa64-b9d2fb65349b"
        },
        {
          "id": "39dfe2c1-d568-422c-82a8-d2c352476b74"
        },
        {
          "id": "927226c9-ccc1-4e17-929e-c2ed74da3c2a"
        },
        {
          "id": "52165e9c-f2b9-457d-aa5b-0e2dfe8b1a8c"
        },
        {
          "id": "ce9a39e1-245d-4c12-8f02-1b234333c0a4"
        },
        {
          "id": "ad592c86-cb3e-4ead-ae46-5cbee5feb9d2"
        },
        {
          "id": "b70dd54a-15b7-44a8-913a-54deb7e76a4a"
        },
        {
          "id": "7ed4c013-190b-48f9-bed4-84bb0652253f"
        },
        {
          "id": "85ec6d61-0892-4b6e-ab28-34717ed83abf"
        },
        {
          "id": "73a49b02-3c91-4c69-9b67-d2fce627be3b"
        },
        {
          "id": "7b465a23-b05c-4420-bb5d-ca1066c9c920"
        },
        {
          "id": "f55d36ae-d614-4ddc-8cd9-9c7a291f7335"
        },
        {
          "id": "ec5b7ba4-b3aa-4c5b-b715-fd3ae7668465"
        },
        {
          "id": "b39cf93a-ebaf-4c3b-bc2d-bea7aeb3f63b"
        },
        {
          "id": "26bee67d-37bf-4897-9a7c-d21a67b4eb8f"
        },
        {
          "id": "35363c4e-32ad-4c77-868c-86590bc1c719"
        },
        {
          "id": "48467f44-fc0f-4313-9740-9f917f55c441"
        },
        {
          "id": "ac16e563-b38c-40c2-8b55-e72e82aef30d"
        },
        {
          "id": "dbfc1f50-2c9c-4042-b123-21d56eadcd27"
        },
        {
          "id": "d8cd11e5-893f-4bf2-af9a-cd57dd728b4c"
        },
        {
          "id": "89c3c478-f7a2-446b-a01d-60da0c44db16"
        },
        {
          "id": "f837334a-1de6-485e-a4a3-9c189c2787a8"
        },
        {
          "id": "61aa2db8-6b00-4a34-8afc-e13dc988ec5d"
        },
        {
          "id": "f113a739-ded3-4ad5-8028-2bfbe52dd610"
        },
        {
          "id": "84631108-1976-415b-addc-add569d485a8"
        },
        {
          "id": "4ba09e7a-1730-4de6-b9da-89f8782fcc74"
        },
        {
          "id": "d289995f-22d1-45d3-a33f-1204dc93e444"
        },
        {
          "id": "0b447f80-6571-411d-8345-cd4ddde7969d"
        },
        {
          "id": "32504e58-1c3c-4161-84a1-9e520b350dbc"
        },
        {
          "id": "abaeb31c-27a3-42a0-9a2a-75b2508aef65"
        }
      ]
    },
    {
      "id": "6e8aa608-fa2b-4933-9678-070717eb28af",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-15T18:30:00.000Z",
      "startAt": "2022-02-15T18:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": null,
      "external": 0,
      "name": "Express",
      "participants": 6,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "wing22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-15T18:09:38.393Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-15T18:36:43.640Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "112c79e0-a201-4ffa-b2c1-fa6ddd831594"
        },
        {
          "id": "e8910338-845c-4998-b94b-21e314764c0d"
        },
        {
          "id": "a095bb7f-a197-4dde-af4f-c0de77449ebe"
        },
        {
          "id": "0e3cf4a2-a52b-4e84-afd0-c5c38e8940eb"
        },
        {
          "id": "d82553bb-654f-4984-8563-d6e4c7bd6938"
        },
        {
          "id": "c2318a49-9083-4251-889b-466487522964"
        },
        {
          "id": "d538f7cf-2f65-4380-86dd-1b30f6554639"
        }
      ]
    },
    {
      "id": "9543a47b-80df-408f-89a3-d5b34b742f89",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-10T20:00:00.000Z",
      "startAt": "2022-02-10T13:00:00.000Z",
      "inputAmount": "20",
      "prizeAmount": "850",
      "participantLimit": 50,
      "description": null,
      "external": 0,
      "name": "All Win - Quinta",
      "participants": 18,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "wing22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-09T14:00:20.542Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-10T20:31:12.923Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "ae5d2332-9654-45bb-b9c4-c00abd5f1143"
        },
        {
          "id": "cd8be9e9-7708-41a4-8f64-98c372c6acd7"
        },
        {
          "id": "d0515de7-d1fb-4a43-9eb9-66a2d5840eb8"
        },
        {
          "id": "f648e0f0-31eb-448f-8466-53f1f4e95f04"
        },
        {
          "id": "967f3eab-46fc-4ebe-bb38-b58174e97977"
        },
        {
          "id": "745af702-8150-46aa-ad4c-088dba79fd1b"
        },
        {
          "id": "a0cfa80f-514d-4603-846f-3c33605bb788"
        },
        {
          "id": "1c662bce-29f4-4b48-8414-66903737095f"
        },
        {
          "id": "83936f5b-2454-4c61-a7f3-e7cf03b10cf0"
        },
        {
          "id": "5f5d9e20-6917-46f4-a8ba-453972fe5386"
        },
        {
          "id": "aa9e686f-1c55-416a-8982-f498ee8a59c5"
        },
        {
          "id": "f43bc73d-cf81-4365-8680-7d2752612c2f"
        },
        {
          "id": "7f195488-93cd-49b7-98ed-4d2725786fd9"
        },
        {
          "id": "b9a03c07-4da6-4da3-8f4c-3b3eb673d9d9"
        },
        {
          "id": "8eca8083-15bf-4c74-bece-76fae24e7c46"
        },
        {
          "id": "f01854b4-d95a-4534-a549-009c8c38fc2b"
        },
        {
          "id": "850500c6-7343-4ccf-ae34-034bd32341ea"
        },
        {
          "id": "9c4818ab-fcf6-4bd7-b75e-05cf783204d1"
        },
        {
          "id": "ee3942c3-81c3-45ed-9e77-38062d2abe42"
        }
      ]
    },
    {
      "id": "e7fe98f4-3061-4307-beaa-bfa17f0dd325",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-09T20:00:00.000Z",
      "startAt": "2022-02-09T12:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": null,
      "external": 0,
      "name": "Daily Free 2",
      "participants": 71,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoh22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-09T11:51:11.922Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-09T20:00:00.434Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "54d4c317-810f-416c-b75c-d0a141bcd276"
        },
        {
          "id": "ac4b65a9-68da-439d-9c9e-ee74c8968e17"
        },
        {
          "id": "e3f9b1a4-98cd-4c0c-80c2-0b9b62c60573"
        },
        {
          "id": "a4812a8d-2dc5-4cb4-8c3e-da9f0403b267"
        },
        {
          "id": "26682c2e-eea4-4ca9-b8be-e15632f0f095"
        },
        {
          "id": "887a66f1-e7e9-4639-a81d-ecd8c08f965d"
        },
        {
          "id": "1bc00ed4-7ff6-4b7d-ac90-3466ff40c767"
        },
        {
          "id": "242cb736-3ea2-433f-a91f-a27205131a35"
        },
        {
          "id": "81860551-773f-47cc-8625-960e659f68e2"
        },
        {
          "id": "5c9fc3f9-70c2-490e-94ef-f8b60ae8ec7f"
        },
        {
          "id": "31a24408-3fd1-4ed0-8288-717fcc603a4b"
        },
        {
          "id": "b71fafaf-1224-4b93-b1ae-8e4ab9b6e7b7"
        },
        {
          "id": "04aeac38-04c1-4816-b986-7e9a5b1e0ac1"
        },
        {
          "id": "3e074e65-905b-4e90-adba-9e74fb1958a2"
        },
        {
          "id": "09d574b9-84e6-4209-947d-399d97d45a3f"
        },
        {
          "id": "fe38141a-e341-4260-b6b2-14a5dc1aae29"
        },
        {
          "id": "d2691320-ee9d-48c8-85fe-4473308f9283"
        },
        {
          "id": "435b81e7-274c-49bc-a847-58304258e27e"
        },
        {
          "id": "d5590e30-1a20-466c-b747-ef34c7be558e"
        },
        {
          "id": "e6d1ceb5-938b-4c6c-aa52-7211ad8d1e04"
        },
        {
          "id": "a196f8f5-64d5-4d99-92eb-3db9e5852894"
        },
        {
          "id": "4a96b90a-0d7a-4889-b873-fa40aa2f1d63"
        },
        {
          "id": "f6e4a7c0-5263-4fbc-8015-39ecb96027c0"
        },
        {
          "id": "9ef79453-b10d-4624-95e0-6039a96a0d0f"
        },
        {
          "id": "7a026c52-e12d-4b8f-ab72-d4797130e32a"
        },
        {
          "id": "55857fa4-2e28-410d-a1e8-fca3ad58e5f3"
        },
        {
          "id": "27204495-c309-4cc3-9988-8f6d8d41b6cb"
        },
        {
          "id": "276a082e-ed0c-4c29-ae75-2dee0677d8a8"
        },
        {
          "id": "88ad6f78-0913-4ff7-96bf-24b3cbd38271"
        },
        {
          "id": "4720ad51-aa61-4b3e-a324-3923f3c96f23"
        },
        {
          "id": "9b85692e-b56e-4821-ad7b-2eac7933da67"
        },
        {
          "id": "26ab8764-8222-429c-b587-3718b702302d"
        },
        {
          "id": "aa61039e-5ed6-4538-a310-cc494241d1c5"
        },
        {
          "id": "cf1d1abf-4aa9-4b5f-bc59-3f85622778c1"
        },
        {
          "id": "d99e2b2d-884e-47a3-9c41-1a1699d9d307"
        },
        {
          "id": "b21f8e5e-ce90-41f8-ab5b-ca240ae7c12c"
        },
        {
          "id": "4a44cf9b-5111-4eda-90b5-c63f95e0a345"
        },
        {
          "id": "469747d7-6190-47ab-8700-8acda0b19e7b"
        },
        {
          "id": "7385847b-08a1-445d-a234-d7fa991db3ef"
        },
        {
          "id": "6887c06d-71b6-4320-b47c-88a952e355d5"
        },
        {
          "id": "8374331e-774a-499a-8f6b-22ab406bae8d"
        },
        {
          "id": "e40a8f6d-79d5-4f6a-8d25-ecf2164d9a36"
        },
        {
          "id": "146dd95c-e6e8-44ac-aa32-f1c322d3c8ed"
        },
        {
          "id": "89919204-0085-48de-ab06-c41b1b9156b1"
        },
        {
          "id": "ced51617-b672-4c75-9075-2bf0086fd3ab"
        },
        {
          "id": "ab407e63-06a4-4479-bbf9-0e6002c7a20e"
        },
        {
          "id": "b3676c1f-2a81-4865-b6c8-11ae1788b758"
        },
        {
          "id": "af5199b6-e884-48a5-b313-99c64f1d1483"
        },
        {
          "id": "c017a624-3fb3-4d7a-a329-a8bc5fc35c66"
        },
        {
          "id": "37b34ab2-c077-4e9c-ae67-4d20148df44c"
        },
        {
          "id": "b718283f-300e-43a0-a40b-c117c184c122"
        },
        {
          "id": "fb1296b0-2369-4fb8-86ab-8853f8cfcd30"
        },
        {
          "id": "44cd72f7-6d6e-4842-818f-5881109c97e4"
        },
        {
          "id": "e3713a1a-2999-4f05-addd-52019562c3e8"
        },
        {
          "id": "60fc72d4-d039-48b0-81b7-a84711b4e584"
        },
        {
          "id": "35962139-c889-4501-a183-1651521b0ace"
        },
        {
          "id": "f94489e8-fd68-4efc-a145-56669c22e227"
        },
        {
          "id": "73a5d1fd-d780-4a15-b135-6dd89004e4f2"
        },
        {
          "id": "bacd8fb5-2a95-442e-8ebd-40a4603d6ad1"
        },
        {
          "id": "a0252731-c0d3-409d-ac6c-78d2d9f1e0d1"
        },
        {
          "id": "1e80d1c2-d792-46f3-8f0e-1bb9a7f4c928"
        },
        {
          "id": "a8823de7-a7f2-4e12-b90a-211297dfe167"
        },
        {
          "id": "2720ddb3-8f06-483c-a50c-4a120977d99e"
        },
        {
          "id": "a91fee8a-1773-4c25-8931-b5e7ff3e2501"
        },
        {
          "id": "950234cf-f281-4e56-9c08-96e00aba9c50"
        },
        {
          "id": "48292fe5-6657-4e37-a286-a56da54ab01a"
        },
        {
          "id": "1937c008-4f8a-4ab7-9a69-714e1d03d863"
        },
        {
          "id": "7fbafcc1-d368-424f-998e-5bbe1e3ce1ae"
        },
        {
          "id": "6179cc67-da04-4c7a-bf8b-9bf4caa90f66"
        },
        {
          "id": "99943f44-8587-4376-add7-d47e30bb73c8"
        },
        {
          "id": "2b890d95-47fc-4314-a997-41977d9f88e1"
        },
        {
          "id": "dfc41b88-0567-49f1-a1e2-ec08e255e6e2"
        },
        {
          "id": "12ff3d80-eed7-42c7-b781-5abea3b1d0f5"
        }
      ]
    },
    {
      "id": "0f19563d-8709-4b74-9d5c-71e24dd3d1b1",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-09T20:00:00.000Z",
      "startAt": "2022-02-09T13:00:00.000Z",
      "inputAmount": "10",
      "prizeAmount": "212.5",
      "participantLimit": 25,
      "description": null,
      "external": 0,
      "name": "High Prize",
      "participants": 23,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoh22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 1,
      "type": 0,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-09T11:44:17.487Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-10T14:14:36.666Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "271e21ac-6dde-46c2-87e1-94c975571e6f"
        },
        {
          "id": "da3b306c-f4e7-4875-9919-11d32b57a336"
        },
        {
          "id": "a42bc821-daa1-41ed-bab0-df842f704224"
        },
        {
          "id": "016c1c4c-6cea-4a03-8bd8-4086e74e6f07"
        },
        {
          "id": "301fe7f3-4c1f-447a-9a9c-e73497bf5ea7"
        },
        {
          "id": "2c277573-628d-48c0-b381-02f87286a95b"
        },
        {
          "id": "b5e7963c-ad98-4c42-9579-0d3ad742049e"
        },
        {
          "id": "8e40772f-74cc-4de3-9707-f8eb6ec83fd7"
        },
        {
          "id": "b838ae91-531f-44ad-8e64-37186f8ebf46"
        },
        {
          "id": "d39c8380-ca95-4ef1-927b-711a004c0e84"
        },
        {
          "id": "b5956317-9d3a-4618-aa7d-1c84e272f1d1"
        },
        {
          "id": "b19c437f-a8e6-43e7-9945-3cec42057f5a"
        },
        {
          "id": "80d7eba7-3d76-4564-804c-bab3f1f16996"
        },
        {
          "id": "a93b5069-9a25-4a14-a479-73a8a89fbc1e"
        },
        {
          "id": "43e5f637-3631-4626-839e-433584dad4b5"
        },
        {
          "id": "d9265319-d6fe-46f4-9a04-d88318eaaded"
        },
        {
          "id": "75ee08df-6e78-46c8-b274-56e502ec64c3"
        },
        {
          "id": "6d51c46f-751f-432e-92ab-9fce8f35c491"
        },
        {
          "id": "d508590b-39f6-47c3-848a-bda45fd6889b"
        },
        {
          "id": "1f4a4a79-e88e-49b5-bd44-1cde2caca56c"
        },
        {
          "id": "e632d53e-9677-485f-8f2b-ef06326c5d34"
        },
        {
          "id": "7d16f426-159b-49ab-82b6-3819e800c1f9"
        },
        {
          "id": "11d418af-0d49-4392-95af-afb5149be78f"
        }
      ]
    },
    {
      "id": "e5eac8c7-8b21-4730-90d9-417c7eb1e1bb",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-09T20:00:00.000Z",
      "startAt": "2022-02-09T03:09:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": null,
      "external": 0,
      "name": "Daily Free",
      "participants": 100,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "wing22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-08T13:06:29.892Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-09T20:00:00.571Z",
      "active": true,
      "tournamentPersonList": []
    },
    {
      "id": "e888dd71-4776-4075-b609-1c2ae6a628c4",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-08T21:00:00.000Z",
      "startAt": "2022-02-08T12:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": null,
      "external": 0,
      "name": "Daily Free",
      "participants": 100,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoh22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-07T16:07:59.107Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-08T21:00:00.451Z",
      "active": true,
      "tournamentPersonList": []
    },
    {
      "id": "5e61899c-2396-472c-a585-5ce07e224848",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-04T20:00:00.000Z",
      "startAt": "2022-02-04T12:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": null,
      "external": 0,
      "name": "Daily Free",
      "participants": 85,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoh22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-02-03T14:58:03.010Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-04T20:32:50.355Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "df9360cf-61b1-4907-89c4-78c7c745d482"
        },
        {
          "id": "3446ccc9-0af6-493a-983a-a361f48503c8"
        },
        {
          "id": "45384fef-bd38-4db3-ab8f-0a5714778748"
        },
        {
          "id": "27999cdc-8abc-46ca-9f85-7e177d6ae5a2"
        },
        {
          "id": "d629e21b-8791-4d15-b4ee-2838acb4e458"
        },
        {
          "id": "d8809c71-3856-4b94-892a-e9c99f15f134"
        },
        {
          "id": "d1170d55-e7aa-4adb-8db3-b7d042706e8c"
        },
        {
          "id": "52352211-10e2-461e-81e8-bcbd47e7c931"
        },
        {
          "id": "6b2e7bd6-cecb-4580-9d1a-61b3411778f2"
        },
        {
          "id": "e1f09407-aaa1-48ba-93c7-93c86d640a04"
        },
        {
          "id": "02083cd8-c8c1-40f6-8bb0-e2cdec56948c"
        },
        {
          "id": "f8759392-6c1f-4aeb-b741-7e861bea7e83"
        },
        {
          "id": "43fe359c-dbe1-4e15-91a4-bb22b77397e7"
        },
        {
          "id": "72ce3ca5-a86c-4c6f-9d34-1d5a0e33afe3"
        },
        {
          "id": "c0e63faa-bf9d-4598-b62c-0363c890b9e3"
        },
        {
          "id": "15ff4a80-f120-4d12-a4c7-bdbecb90d6f4"
        },
        {
          "id": "32a9f6a3-2df3-4f38-b8be-bc809b84cb29"
        },
        {
          "id": "167ede76-b086-4206-8a70-2c1a89364618"
        },
        {
          "id": "c6c57bb4-d8a2-4554-9436-9a26bf770c2d"
        },
        {
          "id": "98459d0c-fbe2-48dd-9f3d-11d8ac3932d3"
        },
        {
          "id": "d7838433-7530-47f0-a6a7-e9e6a2f985a2"
        },
        {
          "id": "77369ee2-c79d-4670-9ed9-28b36f9d37ad"
        },
        {
          "id": "2bedae8c-8637-46ae-ba48-126ed7f1179e"
        },
        {
          "id": "40767b3d-831d-4400-964e-bef6f3d87d58"
        },
        {
          "id": "81f598cc-37f7-4eca-a1c6-8aed74d77bb0"
        },
        {
          "id": "06dc05f1-74eb-4cf3-866f-34060c80af2f"
        },
        {
          "id": "68fa732b-7d91-46a7-904b-e85b57405fff"
        },
        {
          "id": "dad0a9ac-d637-4e07-801e-24592477df87"
        },
        {
          "id": "b0e68d09-1e6d-407e-bdb8-f81ff17135c2"
        },
        {
          "id": "323bcc6e-92b2-43a1-953e-a9b20d076d78"
        },
        {
          "id": "ba866b9c-f77e-451a-9fe6-3b53ef132331"
        },
        {
          "id": "f62f6091-f0bd-4cbf-a16a-d453362fbbd6"
        },
        {
          "id": "c9b1141b-ae56-444a-9777-bebe52a99b31"
        },
        {
          "id": "56a2eba0-b000-4bb3-9c2d-9a61999159f8"
        },
        {
          "id": "7a80757c-08b4-4662-b93d-ed860f2da46d"
        },
        {
          "id": "b3953f6a-e533-4c0c-aea4-9fff8c71740c"
        },
        {
          "id": "ba439567-06b1-430f-a5dc-1d2ddfb29d6d"
        },
        {
          "id": "b59ea1f5-af96-48ba-aa0e-9b190d75f782"
        },
        {
          "id": "288335c9-f355-48be-9162-18ccf4ef02fc"
        },
        {
          "id": "dd30dad1-89cf-460f-8177-bd48b0ae08d2"
        },
        {
          "id": "0069355d-ff07-41a9-8395-ecfb844cd2ba"
        },
        {
          "id": "c7b0aaa1-bd92-40e1-a7db-2d31150de002"
        },
        {
          "id": "c5f3ba1b-a8c3-4947-9750-28f67954eb45"
        },
        {
          "id": "6ce41e7c-914e-43fe-b231-df9438f56c3c"
        },
        {
          "id": "53ecf327-a1e1-4151-b5b7-f75f530fb64d"
        },
        {
          "id": "c3caacb8-d7a9-4dc6-af0a-8d0a36e26b46"
        },
        {
          "id": "efa938af-08f3-41c1-8dda-1c629720d1d0"
        },
        {
          "id": "b86224c5-7909-4681-8fe0-dfd8cd70410c"
        },
        {
          "id": "58e0e8a3-4bde-4653-95e7-eed9a3a7052c"
        },
        {
          "id": "fa92e746-319b-4443-a7ab-2191961dce27"
        },
        {
          "id": "48f32658-a79f-4b90-a32a-947f4e1dbbf7"
        },
        {
          "id": "0ab621b3-d070-4754-90c9-50f413e2b764"
        },
        {
          "id": "2e2f8f57-8809-4a48-b5b6-cf004aa40ea6"
        },
        {
          "id": "28aee9a5-0108-4ee1-9ddd-73b1b6e865d6"
        },
        {
          "id": "50f082a5-2260-40a8-90fd-12c81e95ffcf"
        },
        {
          "id": "2a53f91c-30fe-4bfe-912d-b3efbcfc06d6"
        },
        {
          "id": "b0d79d26-0664-4df6-90c5-b975ef239d96"
        },
        {
          "id": "85f93e0c-5689-4d46-a52b-a8d83f2fa127"
        },
        {
          "id": "c1d3cb67-77bd-42bc-80d9-44b0f4fcb64a"
        },
        {
          "id": "c04d7d55-f2ab-47ab-9f7b-773ffbaea737"
        },
        {
          "id": "6d5244ee-2d3a-493a-bde8-e13c74a2f405"
        },
        {
          "id": "9ec5cb27-8071-4c33-931c-4cfd7ceef14b"
        },
        {
          "id": "e84735f6-5007-4892-bbcc-8d1ecbed5bc4"
        },
        {
          "id": "c09dcd18-5a6c-4694-a0b1-9231325511e3"
        },
        {
          "id": "b2ff007c-efe8-4ea9-8efd-4acd6a9bad14"
        },
        {
          "id": "b9135f20-6f74-4617-b672-7b5d06d65a56"
        },
        {
          "id": "5b53d350-1766-456e-9407-7d409d82740c"
        },
        {
          "id": "49da52b9-df70-4e01-b619-61a1b464ce62"
        },
        {
          "id": "a7943d1c-bdea-42d6-99cc-ef4fbba39de1"
        },
        {
          "id": "ee0e9641-d0fc-441b-bded-1179788b95a8"
        },
        {
          "id": "14294020-2eaa-4f94-a67f-71187b223ece"
        },
        {
          "id": "7cb6f52e-0067-4dbf-91d0-cf3b76eefcbc"
        },
        {
          "id": "e89a97b2-1035-4fbe-ab11-8c34f50a8b14"
        },
        {
          "id": "5f4b00b2-74bd-47d9-92f9-ba1e1b940ff2"
        },
        {
          "id": "e38b4075-e454-4dd2-94ba-951c2f692d1b"
        },
        {
          "id": "7ce4fac3-cdfd-4a78-ba6a-a5833d4a55ad"
        },
        {
          "id": "0230d8b9-0ef7-49dd-80cd-ca9844332bec"
        },
        {
          "id": "24d51ad4-c3d8-4a66-b196-b16e8da29f0b"
        },
        {
          "id": "cb4d7e18-2d44-4c17-9f75-09a939decba6"
        },
        {
          "id": "a37cb4c2-492a-48f8-af50-3db63e9d538e"
        },
        {
          "id": "462feb0e-9c04-4cc2-83b9-30785a914d22"
        },
        {
          "id": "97ba78a5-0a37-44ac-855a-94be79e91162"
        },
        {
          "id": "2d715340-10d6-4aab-a1c3-2089e1d8cf16"
        },
        {
          "id": "931a2203-8e75-453d-846d-0cf82f9f6a98"
        },
        {
          "id": "4f72f5b4-dc6d-460f-a982-653578188eb4"
        },
        {
          "id": "03443cc7-323f-4463-b816-bb8850478a95"
        }
      ]
    },
    {
      "id": "03b5542b-aa4d-4ba8-b75c-4c48d9fbb539",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-02-02T20:00:00.000Z",
      "startAt": "2022-02-02T13:00:00.000Z",
      "inputAmount": "20",
      "prizeAmount": "850",
      "participantLimit": 50,
      "description": null,
      "external": 0,
      "name": "All Win - Quarta",
      "participants": 27,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "wing22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-31T11:50:01.119Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-02T20:00:00.511Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "cb980927-160e-4603-8722-0f70e8c67a2c"
        },
        {
          "id": "d0fb939c-f64f-41f1-8662-cf3bece64352"
        },
        {
          "id": "59d8baff-9141-4e9e-aab7-e07917813aa1"
        },
        {
          "id": "97c0f8a0-75dd-424c-96cf-4672b732b103"
        },
        {
          "id": "0bdbf177-03d5-4f8a-b181-ecb7326d04b4"
        },
        {
          "id": "b6ddb70e-9fea-447b-8ab7-a7c6e2b7bdd3"
        },
        {
          "id": "5809bee1-c4e2-4bfe-ab6a-53ef1212ba29"
        },
        {
          "id": "d7f4cc52-fce7-424d-85fb-7b00f00387ce"
        },
        {
          "id": "b9b8e9ef-150f-41a6-9995-5dd6c506409c"
        },
        {
          "id": "06d77dd8-93be-400d-a75b-d508c9ae9775"
        },
        {
          "id": "c2c2cb7f-257e-47cf-8370-a2c3b710f549"
        },
        {
          "id": "a14abc15-f312-41d8-8e25-feffa2d7b0db"
        },
        {
          "id": "ba61877e-fb39-4518-b858-db600a57a5ad"
        },
        {
          "id": "8df12bdd-442b-494c-a6d6-0b4aa31e3246"
        },
        {
          "id": "0f25b4ad-ffc8-46cf-82d1-22e4328b58ed"
        },
        {
          "id": "bbe8d337-abaa-4676-83c2-9bd36b40e8e8"
        },
        {
          "id": "aa27c3ac-4012-4b9b-b1b9-7780cdf9140a"
        },
        {
          "id": "e6629296-29f2-4232-be14-0459cd07a137"
        },
        {
          "id": "f3fbf78e-190a-4417-8835-8f5a96c6c622"
        },
        {
          "id": "9e6ca8cd-9af6-4085-8d8d-9e58ef2ae74b"
        },
        {
          "id": "49322592-ad8b-416c-86ec-dd1605d13399"
        },
        {
          "id": "b12b2843-76c9-4951-ba22-464c5d993479"
        },
        {
          "id": "a927371f-b494-47f2-b04e-6083cf5ef27c"
        },
        {
          "id": "41779f25-77aa-44db-816e-fc82ec9c7a8a"
        },
        {
          "id": "1890552d-44db-4c68-83e4-966eb3d1be12"
        },
        {
          "id": "53c91d16-110b-4053-92c7-33df20bd2fa8"
        },
        {
          "id": "92d1c418-ba97-4ddb-b869-a0bafe13c70e"
        }
      ]
    },
    {
      "id": "d1d43d0b-bfd4-4ad8-b88e-4575ed7081d0",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "10000",
      "status": 2,
      "endAt": "2022-01-28T20:00:00.000Z",
      "startAt": "2022-01-23T12:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 100,
      "description": "Teste longa duração afiliado",
      "external": 0,
      "name": "Teste longa duração afiliado",
      "participants": 15,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdog22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 100,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "3000",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-26T14:31:38.652Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-02-11T16:10:00.800Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "48d1278f-bf0d-4824-9c0a-b164e2a260c7"
        },
        {
          "id": "761df738-31e6-4b17-800c-8b5eb98546ea"
        },
        {
          "id": "9b5c767c-0b33-4eff-b071-62a693f45a1c"
        },
        {
          "id": "5bf73545-168c-43b8-94c8-fb11a04a700c"
        },
        {
          "id": "c6d62038-7357-486a-b27b-b1b0ec863e10"
        },
        {
          "id": "8e55f1df-12b7-43ab-b826-285b0168568f"
        },
        {
          "id": "3dbd8f7d-f2e7-42ce-8e36-2b84d54eff7d"
        },
        {
          "id": "639e8928-3ecf-40d0-b882-edb037a32707"
        },
        {
          "id": "89e80c08-cd59-454a-b1ae-b7f780133bbe"
        },
        {
          "id": "913885b2-de1f-49b3-9503-78d5c7fc26ff"
        },
        {
          "id": "eb396523-7fb0-453b-a973-e1d08e81df9d"
        },
        {
          "id": "4e3360e3-1caa-44a4-8fbc-10a2e5a9e3b8"
        },
        {
          "id": "3d8ac179-c26b-4c80-81f5-c8d565dc0c44"
        },
        {
          "id": "4c244da5-7e65-4922-9e9a-b55b71b24a57"
        },
        {
          "id": "7ff55b0b-51e6-48c5-b6d9-f19efe535a4c"
        }
      ]
    },
    {
      "id": "df89a835-47d8-490d-b462-79ad90128655",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "10000",
      "status": 2,
      "endAt": "2022-01-26T20:00:00.000Z",
      "startAt": "2022-01-26T12:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "Teste",
      "external": 0,
      "name": "Teste Afiliado",
      "participants": 2,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdog22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": null,
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-26T14:07:49.094Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-01-26T20:00:00.659Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "b8fe6168-a2d0-4b62-b284-7be48f9dfc3c"
        },
        {
          "id": "c766e52e-a4eb-4fea-beb0-b018cd4261ff"
        }
      ]
    },
    {
      "id": "fecacd55-fbc7-4c3a-9634-570723e61739",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-01-29T02:59:00.000Z",
      "startAt": "2022-01-21T03:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "TESTE",
      "external": 0,
      "name": "TESTE",
      "participants": 26,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdog22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "5000",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-21T19:56:53.479Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-01-31T11:00:10.347Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "d43cecc7-099f-4772-91f1-59040067e553"
        },
        {
          "id": "e0c0697f-cf2b-4cd8-8c16-ee427a0d7a18"
        },
        {
          "id": "548488fc-0243-447e-b1d1-25f810d6f45a"
        },
        {
          "id": "2ca49208-6934-467f-9d28-e8bfd7e36046"
        },
        {
          "id": "174e4963-c4f8-4a44-a6ca-9fef94353b49"
        },
        {
          "id": "df76f335-cfed-46d5-8b86-19d288fd1c3f"
        },
        {
          "id": "5ed4ab21-0de0-4baf-9880-067d546e30fe"
        },
        {
          "id": "89c032c4-f0fe-442f-8909-918cbdcb66c9"
        },
        {
          "id": "89e8e2cf-4397-457d-8d0d-98d243961a95"
        },
        {
          "id": "f6fd558b-54c8-407e-831c-731d057b223e"
        },
        {
          "id": "d0ed1346-82ea-47d1-95fb-b86afc61c43c"
        },
        {
          "id": "26f00d80-df13-436f-8574-fd8cd60b218a"
        },
        {
          "id": "53fe034c-84c1-41ed-b44e-79c96aba71f8"
        },
        {
          "id": "2b898916-face-4426-9df8-4051890009f2"
        },
        {
          "id": "78ac43c7-1d1d-47a5-93e7-91b1a752d5bb"
        },
        {
          "id": "f60908cd-9b2c-4d92-b277-e135dd8edbcc"
        },
        {
          "id": "e816d37a-9e7c-49f3-a35e-ef5f78584ac5"
        },
        {
          "id": "de337d8a-54d1-44a8-9dd7-3736a4011bea"
        },
        {
          "id": "9f3faf11-579b-48f7-87a8-8b19fea3c66f"
        },
        {
          "id": "9bd7408b-59a8-486c-900d-df0266f645a0"
        },
        {
          "id": "e4dea777-cb89-478d-8ee7-ad11d55eca13"
        },
        {
          "id": "5f64f529-ede0-4490-864d-fdbf9c08a22d"
        },
        {
          "id": "27107c20-af4d-4460-b358-43fafc79b946"
        },
        {
          "id": "09590ed2-64dd-4b91-9d8f-f9e761d0293b"
        },
        {
          "id": "7752bfff-b954-4edf-b76d-fca97937dbe1"
        }
      ]
    },
    {
      "id": "06ae17b3-729d-44ac-b2ba-533a1c1897f5",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-01-11T17:59:00.000Z",
      "startAt": "2022-01-11T03:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "TESTE PH",
      "external": 0,
      "name": "TESTE",
      "participants": 0,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoz21",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 20,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "6000.02",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-11T17:57:32.097Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-01-11T17:59:00.549Z",
      "active": true,
      "tournamentPersonList": []
    },
    {
      "id": "af839525-fb01-4f85-ac23-66f52c329521",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-03-13T17:57:00.000Z",
      "startAt": "2022-01-11T03:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "TESTE PH",
      "external": 1,
      "name": "TESTE",
      "participants": 25,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdok22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 20,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "6000.01",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-11T17:55:08.754Z",
      "updatedBy": "1ba39304-fea7-4dad-a25d-3d1d8820c3c3",
      "updatedAt": "2022-04-11T11:57:29.544Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "c1e4de0b-7c53-4a8e-9488-2e6e7b458795"
        },
        {
          "id": "ed396a41-ffd9-4383-8ec2-7d05a5b50206"
        },
        {
          "id": "894c0ed3-4298-4628-9dd2-93f4587cdafe"
        },
        {
          "id": "237a0c3e-afe1-460a-9627-0b1389bf4e55"
        },
        {
          "id": "a6f167ca-0514-4514-b72c-f0501509072e"
        },
        {
          "id": "2c7a0267-ce1a-461a-ac96-ccc8d8bf7897"
        },
        {
          "id": "c0858f73-f012-44cf-83c9-47eebc2bc215"
        },
        {
          "id": "9831ee0f-504a-464b-b873-5ab48fd72b0c"
        },
        {
          "id": "85435901-da37-48de-bc3d-09aea5e1111f"
        },
        {
          "id": "6b5e69fb-33c4-434c-8a78-3538a6e91e8b"
        },
        {
          "id": "dc004f92-9997-4b5e-b1f3-d10c9d2f9a7c"
        },
        {
          "id": "4eac5ff2-b49a-450e-b883-557bd6d4467b"
        },
        {
          "id": "72a78c30-ad5e-4e5e-b5f6-3727c0c11ad0"
        },
        {
          "id": "61ed43c6-6d5c-47dd-ba4d-4989d7b461d2"
        },
        {
          "id": "03fde7f3-5677-4e43-a413-666b25aa243b"
        },
        {
          "id": "be3ff623-8b2e-4209-b89a-a5caff359276"
        },
        {
          "id": "7f8384a7-8d69-4d36-973f-9d46f89f3d72"
        },
        {
          "id": "5af908b5-4ced-4747-a0df-4b8a01847a10"
        },
        {
          "id": "216d0ecc-771b-4f30-b652-17aeebdaf523"
        },
        {
          "id": "abe9ae15-53f7-471d-a081-e9bde8304174"
        },
        {
          "id": "782c7481-84f1-465b-90c8-e190c73186b9"
        },
        {
          "id": "e311d71f-183a-4f69-b737-fea1ac1dff36"
        },
        {
          "id": "029cad43-0c5a-46a4-abcf-34290887634c"
        },
        {
          "id": "bd071225-e42d-4d7f-9471-b91f5e344414"
        },
        {
          "id": "463998cf-30a4-4fe9-8c26-6f4a54ac585f"
        },
        {
          "id": "06e84f28-48f1-4390-970b-53e2909595f6"
        },
        {
          "id": "e39979e7-571d-49d5-b1a0-90cdfbd0310d"
        },
        {
          "id": "28e491d9-771e-463e-83f0-1662fe145900"
        }
      ]
    },
    {
      "id": "bb37994e-9cc2-4115-9bb1-afd706d76705",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-01-10T21:00:00.000Z",
      "startAt": "2022-01-10T13:00:00.000Z",
      "inputAmount": null,
      "prizeAmount": null,
      "participantLimit": 25,
      "description": "",
      "external": 0,
      "name": "TESTE",
      "participants": 0,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdog22",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "0",
      "createdBy": "fee89865-6b57-4631-8e02-a4014d327945",
      "createdAt": "2022-01-10T20:06:43.313Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-01-10T21:00:20.958Z",
      "active": true,
      "tournamentPersonList": []
    },
    {
      "id": "b98872b3-1496-4f27-b971-9d65e5b9e583",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-01-07T16:05:00.000Z",
      "startAt": "2022-01-07T16:00:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "Teste Torneio WDO",
      "external": 0,
      "name": "TESTE",
      "participants": 3,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoz21",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 20,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "0",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-07T15:59:09.516Z",
      "updatedBy": "66f41a17-42a0-4390-b362-821dce4e286c",
      "updatedAt": "2022-01-07T16:05:40.800Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "55fc6d97-4573-4c11-928d-cd54d257a8e6"
        },
        {
          "id": "38f9ae42-026f-4d55-91bf-932bbe0df485"
        },
        {
          "id": "f7229841-ef68-434b-b2e1-2bd2911a9814"
        }
      ]
    },
    {
      "id": "cc70df89-089b-4499-b481-434469f2d7c7",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-01-07T14:25:00.000Z",
      "startAt": "2022-01-07T14:05:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "Teste de criação de torneios pelo afiliado",
      "external": 0,
      "name": "TESTE",
      "participants": 1,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "winz21",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": "0",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-07T14:03:43.672Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-01-07T14:25:00.504Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "f55bc26c-47b3-4bd7-aae2-be195395dca1"
        }
      ]
    },
    {
      "id": "0fb66284-2acc-4241-ab18-6628c2dfa48e",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "5000",
      "status": 2,
      "endAt": "2022-01-07T14:25:00.000Z",
      "startAt": "2022-01-07T14:05:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "Teste de criação de torneios pelo afiliado",
      "external": 0,
      "name": "TESTE",
      "participants": 2,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/br-flag.svg",
      "code": "winz21",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 1,
      "dailyLossLimit": "0",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2022-01-07T14:03:27.113Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2022-01-07T14:25:00.519Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "635195d2-d2c6-49ef-bc56-bd9514ebd919"
        },
        {
          "id": "3a2edb25-0868-4df0-8554-088495b23e70"
        }
      ]
    },
    {
      "id": "0094f84a-aca7-44e7-be39-143895097379",
      "stopLossRate": "0",
      "orderLimit": null,
      "openingBalance": "6000",
      "status": 2,
      "endAt": "2021-11-23T20:50:00.000Z",
      "startAt": "2021-11-23T20:36:00.000Z",
      "inputAmount": "0",
      "prizeAmount": "0",
      "participantLimit": 25,
      "description": "Torneio criado para testar resoluções de bugs.",
      "external": 0,
      "name": "Teste - ajuste de bugs",
      "participants": 0,
      "picture": "https://cdn.nickbuilder.com.br/4fa81a8d-4d56-49be-85b6-f5d5d2ebfc21/img/eua-flag.svg",
      "code": "wdoz21",
      "ownerId": "7e3e9abd-3214-4e95-b837-09de5dec1552",
      "contractLimit": 50,
      "rulesTerms": "",
      "acceptTerms": "",
      "couponMult": null,
      "awardType": 0,
      "type": 0,
      "dailyLossLimit": "0",
      "createdBy": "3eb3382a-80d7-43f9-b10d-601dcd531b85",
      "createdAt": "2021-11-23T20:36:43.912Z",
      "updatedBy": "dcdfa9a1-4a22-4f4e-8aad-aecc8e7fc961",
      "updatedAt": "2021-11-23T21:51:12.488Z",
      "active": true,
      "tournamentPersonList": [
        {
          "id": "2c211398-4065-4393-a847-e9db1cce7f9f"
        },
        {
          "id": "68bc91d1-7992-48a5-afe4-d333fbeaccf1"
        },
        {
          "id": "0be5b7de-c949-4f98-92f8-acd0cbc54ba9"
        },
        {
          "id": "d35f4990-8413-4d31-9898-ff1f027e8695"
        },
        {
          "id": "ddadeff7-c923-453c-90f1-559a4bcc73c0"
        },
        {
          "id": "0bab7234-2ff1-49e4-b2b5-198bad45a6f3"
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public participateTournament(list: any){

  };

  public closeModal(){};
  public openModal(modal: any){};
  public openModalTable(modal:any){};

}
