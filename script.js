var text_input = document.querySelector('#text-input');
var rotation_input = document.querySelector('#rotation-input');
var encrypt_text = document.querySelector('#encrypt-text');
var number_of_cube = document.querySelector('#numberOfCube');
var encrypt_button = document.querySelector('#encrypt-button');
var cube_section = document.querySelector('.cube');


encrypt_button.addEventListener('click', function () {
  cube_section.innerHTML = "";
  var n = Math.ceil(text_input.value.length / 8);
  number_of_cube.innerHTML = `Number of cube : ${n}`;

  showCube(n);
  rotateCube();
});

function showCube (n) {
  var m = 0;
  while (m < n) {
    cube_section.innerHTML += `<h3>Cube ${m + 1}</h3>`;
    cube_section.innerHTML += `<h3>(0, 0, 0) => ${text_input.value.charAt(0 + m * 8)}</h3>`;
    cube_section.innerHTML += `<h3>(0, 1, 0) => ${text_input.value.charAt(1 + m * 8)}</h3>`;
    cube_section.innerHTML += `<h3>(1, 1, 0) => ${text_input.value.charAt(2 + m * 8)}</h3>`;
    cube_section.innerHTML += `<h3>(1, 0, 0) => ${text_input.value.charAt(3 + m * 8)}</h3>`;
    cube_section.innerHTML += `<h3>(0, 0, 1) => ${text_input.value.charAt(4 + m * 8)}</h3>`;
    cube_section.innerHTML += `<h3>(0, 1, 1) => ${text_input.value.charAt(5 + m * 8)}</h3>`;
    cube_section.innerHTML += `<h3>(1, 1, 1) => ${text_input.value.charAt(6 + m * 8)}</h3>`;
    cube_section.innerHTML += `<h3>(1, 0, 1) => ${text_input.value.charAt(7 + m * 8)}</h3>`;
    m++;
  }
}
function rotateCube() {
  var each_cube_rotation = rotation_input.value.split(',');
  var cube_rotate_arr = [];

  for (let i = 0; i < each_cube_rotation.length; i++) {
    cube_rotate_arr.push(each_cube_rotation[i].split(':'));
  }
  encrypt_text.innerHTML = cube_rotate_arr[2];
}