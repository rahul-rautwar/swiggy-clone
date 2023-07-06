import React from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const resData = [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "29063",
        name: "Misu",
        uuid: "e48dab10-bade-4287-b076-ac413a5bae51",
        city: "1",
        area: "St Marks Road",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "lx0tpfgsbqygafwh30wh",
        cuisines: [
          "Asian",
          "Chinese",
          "Vietnamese",
          "Malaysian",
          "Sushi",
          "Singaporean",
          "Desserts",
        ],
        tags: [],
        costForTwo: 130000,
        costForTwoString: "₹1300 FOR TWO",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        slaString: "19 MINS",
        lastMileTravel: 0.699999988079071,
        slugs: {
          restaurant: "misu-st-marks-road-central-bangalore",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "4th Floor, Halcyon Complex, Saint Marks Road, Ashok Nagar, Bengaluru, Karnataka 560001",
        locality: "Ashok Nagar",
        parentId: 7415,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3000,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3000,
          message: "",
          title: "Delivery Charge",
          amount: "3000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=7228895~p=1~eid=00000189-21dd-0854-3035-90e9004e0179~srvts=1688490281044",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
          discountTag: "",
          headerTypeV2: 0,
        },
        sla: {
          restaurantId: "29063",
          deliveryTime: 19,
          minDeliveryTime: 19,
          maxDeliveryTime: 19,
          lastMileTravel: 0.699999988079071,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.4",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "3241",
        name: "Meghana Foods",
        uuid: "93695df0-56e1-417e-b9a8-32084ebaadaf",
        city: "1",
        area: "Ashok Nagar",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "e0vvulfbahjxjz6k4uwi",
        cuisines: [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Chinese",
          "Seafood",
        ],
        tags: [],
        costForTwo: 50000,
        costForTwoString: "₹500 FOR TWO",
        deliveryTime: 17,
        minDeliveryTime: 17,
        maxDeliveryTime: 17,
        slaString: "17 MINS",
        lastMileTravel: 2.4000000953674316,
        slugs: {
          restaurant: "meghana-foods-central-bangalore",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
        locality: "Residency Road",
        parentId: 635,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3000,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3000,
          message: "",
          title: "Delivery Charge",
          amount: "3000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.4 kms",
        hasSurge: false,
        sla: {
          restaurantId: "3241",
          deliveryTime: 17,
          minDeliveryTime: 17,
          maxDeliveryTime: 17,
          lastMileTravel: 2.4000000953674316,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.5",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "121603",
        name: "Kannur Food Point",
        uuid: "51983905-e698-4e31-b0d7-e376eca56320",
        city: "1",
        area: "Tavarekere",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
        cuisines: ["Kerala", "Chinese"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        slaString: "25 MINS",
        lastMileTravel: 6.699999809265137,
        slugs: {
          restaurant: "kannur-food-point-btm",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
        locality: "SG Palya",
        parentId: 20974,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 6300,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 6300,
          message: "",
          title: "Delivery Charge",
          amount: "6300",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 1,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "121603",
          deliveryTime: 25,
          minDeliveryTime: 25,
          maxDeliveryTime: 25,
          lastMileTravel: 6.699999809265137,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "IT_IS_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.9",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "684427",
        name: "Cafe Amudham",
        uuid: "e56f2694-6e06-4135-9c08-eb87c2496398",
        city: "1",
        area: "Jayanagar",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "0bcdca61f3cd1e9135b98328593d044f",
        cuisines: ["South Indian", "Snacks"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        slaString: "23 MINS",
        lastMileTravel: 4,
        slugs: {
          restaurant: "cafe-amudham-jayanagar-jayanagar",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "No. 192, , Lalbhagh  Siddapura, Jayanagar 1st Block, Ward No. 144,  Bangalore, B.B.M.P South, Karnataka-560011",
        locality: "Lalbhagh  Siddapura",
        parentId: 396620,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 4000,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 4000,
          message: "",
          title: "Delivery Charge",
          amount: "4000",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=7159548~p=7~eid=00000189-21dd-0854-3035-90eb004e0733~srvts=1688490281044",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4 kms",
        hasSurge: false,
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
          discountTag: "",
          headerTypeV2: 0,
        },
        sla: {
          restaurantId: "684427",
          deliveryTime: 23,
          minDeliveryTime: 23,
          maxDeliveryTime: 23,
          lastMileTravel: 4,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.5",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
  ];
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resData.map((res) => {
          return (
            <RestaurantCard key={res.data.id} resData={res}></RestaurantCard>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
