

let aqi = 52;

if (aqi > 0 && aqi < 50) {
    console.log("Good")
} else if (aqi > 51 && aqi < 100) {
    console.log("Moderate")
} else if (aqi > 101 && aqi < 200) {
    console.log("Unheatlhy (Sensitive Groups)")
} else if (aqi > 151 && aqi < 200) {
    console.log("Unhealthy")
} else if (aqi > 201 && aqi < 300) {
    console.log("Very Unhealthy")
} else {
    console.log("Hazardous.")
}