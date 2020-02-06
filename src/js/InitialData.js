export default function initialData(arrData) {
  arrData.addTask('testovoe1');
  arrData.addTask('testovoe2');
  arrData.addTask('testovoe3');
  arrData.addTask('testovoe4');
  arrData.addTask('testovoe5');

  const [...rest] = arrData.tasks;
  rest[2].pined = true;
  rest[4].pined = true;
}
