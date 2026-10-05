const addressData = {
  SouthCotabato: {
    "Surallah": ["Centrala", "Dajay", "Libertad"],
    "Koronadal": ["Zone I", "Zone II", "Morales"]
  },
  Cebu: {
    "Cebu City": ["Lahug", "Mabolo", "Guadalupe"],
    "Mandaue": ["Subangdaku", "Tipolo"]
  },
  Laguna: {
    "Santa Rosa": ["Balibago", "Don Jose"],
    "Calamba": ["Parian", "Canlubang"]
  }
};

const province = document.getElementById("province");
const city = document.getElementById("city");
const barangay = document.getElementById("barangay");

province.addEventListener("change", () => {
  const cities = addressData[province.value];
  city.innerHTML = '<option value="">-- Select City First --</option>';
  barangay.innerHTML = '<option value="">-- Select City First --</option>';
  barangay.disabled = true;

  if (cities) {
    city.disabled = false;
    city.innerHTML += Object.keys(cities)
      .map(c => `<option value="${c}">${c}</option>`)
      .join("");
  } else {
    city.disabled = true;
  }
});

city.addEventListener("change", () => {
  const barangays = addressData[province.value]?.[city.value];
  barangay.innerHTML = '<option value="">-- Select Barangay --</option>';

  if (barangays) {
    barangay.disabled = false;
    barangay.innerHTML += barangays
      .map(b => `<option value="${b}">${b}</option>`)
      .join("");
  } else {
    barangay.disabled = true;
  }
});

document.getElementById("submitBtn").addEventListener("click", () => {
  const userData = {
    crn: document.querySelector(".cssNum").value,
    email: document.querySelector(".Email").value,
    username: document.querySelector(".usrID").value,
    fullName: `${document.querySelector(".fname").value} ${document.querySelector(".mname").value} ${document.querySelector(".lname").value}`,
    dob: document.querySelector(".dob").value,
    street: document.querySelector(".add").value,
    province: province.value,
    city: city.value,
    barangay: barangay.value,
    zip: document.querySelector(".zipc").value
  };

  localStorage.setItem("memberData", JSON.stringify(userData));
  window.location.href = "output.html";
});