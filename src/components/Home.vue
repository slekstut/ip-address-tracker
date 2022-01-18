<template>
  <div>
    <div class="wrapper">
      <div class="bg">
        <img src="../assets/img/pattern-bg.png" alt="bg-img" />
      </div>
      <div class="container">
        <div class="container__box">
          <h1>IP Address Tracker</h1>
          <div class="input-data">
            <input
              v-model="getIp"
              type="text"
              placeholder="Search for any IP address or domain"
            />
            <button @click="getIpDetails">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path
                  fill="none"
                  stroke="#FFF"
                  stroke-width="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            </button>
          </div>
          <IPinfo v-if="ipDetails" v-bind:ipDetails="ipDetails"/>
        </div>
      </div>
      <div id="map" class="my-map"></div>
    </div>
  </div>
</template>

<script>
import IPinfo from "./IPinfo.vue";
import leaflet from "leaflet";
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    IPinfo,
  },
  setup() {
    let myMap;
    const getIp = ref("");
    const ipDetails = ref(null);
    onMounted(() => {
      myMap = leaflet.map("map").setView([51.505, -0.09], 13);
      leaflet
        .tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              "pk.eyJ1Ijoic2xla3N0dXQiLCJhIjoiY2t5azAyMmV3MDk1bDJ3cG5raGVwbndmYiJ9.ROprHM2WK5s_tAQwXvva1w",
          }
        )
        .addTo(myMap);
    });
    const getIpDetails = async () => {
      try {
        const data = await axios.get(
          `https://geo.ipify.org/api/v2/country?apiKey=at_nynyqkpWlKzutvGimxdUYAlGxnk9G&ipAddress=${getIp.value}`
        );
        const result = data.data;
        ipDetails.value = {
          address: result.ip,
          state: result.location.region,
          timezone: result.location.timezone,
          isp: result.isp,
          lat: result.location.lat,
          lng: result.location.lng
        }
      } catch (error) {
        alert(error.message);
      }
    };
    return { getIp, ipDetails, getIpDetails };
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 20;
    img {
      flex-shrink: 0;
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }
  .container {
    display: grid;
    place-items: center;
    position: absolute;
    width: 100%;
    top: 3%;
    left: 40%;
    transform: translate(-40%, -5%);
    z-index: 9999;
    &__box {
      display: grid;
      justify-items: center;
      gap: 1.5rem;
      width: 76%;
      h1 {
        color: $white;
        font-size: 1.8rem;
        font-weight: 500;
        margin: 0;
        text-align: center;
        line-height: 1;
      }
      .input-data {
        width: 70%;
        max-width: 31rem;
        display: flex;
        flex-wrap: nowrap;
        input {
          font-size: 1.3rem;
          padding: 0.8rem 1.5rem;
          width: 100%;
          border-top-left-radius: 0.8rem;
          border-bottom-left-radius: 0.8rem;
          border: none;
          &:hover {
            cursor: pointer;
          }
        }
        input,
        input::-webkit-input-placeholder {
          font-size: 0.9rem;
          line-height: 1;
          color: $lightGray;
          font-weight: 500;
        }
        button {
          padding: 1rem 1.2rem;
          border-top-right-radius: 0.8rem;
          border-bottom-right-radius: 0.8rem;
          border: none;
          background-color: $darkGray;
          &:hover {
            opacity: 0.85;
            cursor: pointer;
          }
        }
      }
    }
  }
  .my-map {
    width: 100%;
    height: 70%;
    z-index: 0;
  }
}
</style>
