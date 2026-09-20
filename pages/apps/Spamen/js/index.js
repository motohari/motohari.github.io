const fdsa = document.getElementById("fdsa");
const fdsa_range = document.getElementById("fdsa_range");
const count_text = document.getElementById("count");
const count_text_f = document.getElementById("count_f");
const count_text_d = document.getElementById("count_d");
const count_text_s = document.getElementById("count_s");
const count_text_a = document.getElementById("count_a");
const count_text_miss = document.getElementById("fdsa_count_miss");
const fdsa_ps = document.getElementById("fdsa_ps");

let count = Number(0);
let count_last = count;

let count_f = Number(0);
let count_d = Number(0);
let count_s = Number(0);
let count_a = Number(0);
let count_miss = Number(0);

const update_count = () => {count_text.textContent = "カウント FDSA : " + count};
const update_count_f = () => {count_text_f.textContent = "カウント F : " + count_f};
const update_count_d = () => {count_text_d.textContent = "カウント D : " + count_d};
const update_count_s = () => {count_text_s.textContent = "カウント S : " + count_s};
const update_count_a = () => {count_text_a.textContent = "カウント A : " + count_a};
const update_count_miss = () => {count_text_miss.textContent = "ミスカウント : " + count_miss; fdsa.value = ""; fdsa_range.value = "0";};

const reset = () => {
    count = Number(0);
    count_f = Number(0);
    count_d = Number(0);
    count_s = Number(0);
    count_a = Number(0);
    count_miss = Number(0);
    count_last = 0; // fdsa per secondが負の数にならないように
    update_count();
    update_count_f();
    update_count_d();
    update_count_s();
    update_count_a();
    update_count_miss();
    fdsa_range.value = "0";
};

fdsa_range.value = "0";

fdsa.addEventListener("input", function() {
    const value = fdsa.value.toLowerCase();

    if (value === "f") {
        fdsa_range.value = "1";
        count_f++;
        update_count_f();
    } else if (value === "fd") {
        fdsa_range.value = "2";
        count_d++;
        update_count_d();
    } else if (value === "fds") {
        fdsa_range.value = "3";
        count_s++;
        update_count_s();
    } else if (value === "fdsa") {
        fdsa_range.value = "0";
        count_a++;
        update_count_a();

        fdsa.value = "";
        count++;
        update_count();
    };
});

fdsa.addEventListener("input", function() {
    if (!(fdsa.value === "f" || fdsa.value === "fd" || fdsa.value === "fds" || fdsa.value === "fdsa" || fdsa.value === "")) {
        count_miss++;
        update_count_miss();
    }
});

setInterval(() => {
    const fdsa_ps_val = count;
    const fdsa_delta = fdsa_ps_val - count_last;

    fdsa_ps.textContent = "fdsa per second : " + fdsa_delta;

    count_last = fdsa_ps_val;
}, 1000);