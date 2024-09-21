let para = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error veniam ipsa eius suscipit mollitia? Voluptas, aperiam deserunt eos atque magnam placeat tenetur cumque autem reprehenderit exercitationem culpa esse assumenda unde consectetur a nobis dolore, fuga velit repellendus natus iusto accusamus perferendis repellat possimus. Cum fugiat omnis qui veniam! Dolorum ratione est eveniet fugiat deleniti, atque ipsam enim magni perferendis expedita voluptatibus explicabo rerum nam, nesciunt molestiae alias incidunt, velit eos cupiditate delectus reiciendis voluptate. Exercitationem non inventore ullam consequatur quisquam expedita reprehenderit vitae optio debitis amet porro, id animi eaque omnis cupiditate quos aperiam nemo ad illum? Voluptatem laborum reprehenderit soluta. Rem consectetur corporis labore doloribus hic dolorem exercitationem eveniet deserunt explicabo pariatur ex ad repudiandae at, ea totam cupiditate ut similique, eaque inventore quas, commodi necessitatibus minus. Fuga dolore doloremque repellendus excepturi, enim blanditiis est nam impedit, nobis aspernatur tempore quis delectus nihil minima natus illo repudiandae debitis nulla laboriosam perferendis repellat harum. Exercitationem hic optio aut voluptatem quidem cumque ipsa repellat facere, autem nemo mollitia minima earum ipsum molestiae? Nam voluptatibus velit incidunt expedita enim iusto dignissimos hic cupiditate est iste vero odio, sapiente adipisci illo dicta corrupti ut quos odit eveniet tempora suscipit error nesciunt? Natus nostrum recusandae saepe odit magni mollitia sed ducimus rerum laboriosam? Minus quis et asperiores dolore voluptatem deleniti officiis placeat minima. Inventore aut labore accusamus totam voluptatibus hic eveniet voluptatum soluta eaque consequuntur. Voluptates optio tempore nisi quisquam quod distinctio voluptatem fugit beatae minima quam aliquid vitae aspernatur fugiat debitis quidem, molestiae, enim, earum ex quibusdam totam. Pariatur consectetur quam facere quo aperiam, assumenda error, neque nobis tenetur suscipit incidunt architecto tempora voluptates porro vitae temporibus, illo aut nostrum consequatur doloribus natus! Id alias voluptatum esse quas pariatur, fugiat explicabo modi debitis magnam quo vero architecto magni at. Earum quis sequi odio ab obcaecati dolore possimus excepturi tempore natus repellendus delectus quod qui unde maiores reiciendis nulla, corporis ut magni, eligendi veritatis. Ducimus quod labore temporibus beatae laborum nemo. Quidem nisi maiores culpa, laborum eaque perferendis cumque consequatur atque quos reprehenderit harum iste facere! Ex quae, alias consectetur, voluptatum dignissimos ipsa omnis aliquid reiciendis vitae sit cum nesciunt perspiciatis fuga. Numquam dignissimos dolore perspiciatis, dolorum incidunt cupiditate dolorem rerum vitae tenetur non, ut alias? Placeat eligendi vel exercitationem impedit, dignissimos autem eaque delectus ullam incidunt tenetur totam molestiae inventore at, ea iusto ex labore sequi ab unde minima adipisci fuga voluptate? Incidunt ipsam quae libero dolorum dolore blanditiis fuga culpa maxime in, praesentium repudiandae reprehenderit nobis facere. Voluptatibus velit incidunt deleniti qui ullam minima enim laudantium veritatis accusantium recusandae architecto impedit quam maiores pariatur labore beatae reiciendis officiis aliquam, ipsa eveniet accusamus nemo voluptatum molestiae officia. Voluptate deserunt sapiente, explicabo a facilis recusandae facere iusto quaerat consectetur, rerum pariatur repellendus unde ut alias. Ipsam dicta, iusto et pariatur sed, architecto distinctio, est fugiat optio voluptate eos. Consequuntur dignissimos ad sapiente distinctio soluta, quae laboriosam! Labore placeat distinctio at porro facilis fugit, incidunt sapiente, sit iure ad dolorem? Soluta quasi rerum assumenda numquam!",
  ];
  
  // newArray is to make all string words as a Array index[] values that can be used.
  let newArray = para[0].split(" ");
  let Generate = document.getElementById("Generate");
  let showPara = document.getElementById("showPara");
  let paraNumber = document.getElementById("paraNumber");
  
  Generate.addEventListener("click", function () {
    let str = "";
    //numOfParaGenerate is defined as: how many numbers of paragraph we need to generate.
    let numOfParaGenerate = paraNumber.value;
    for (let i = 0; i < numOfParaGenerate; i++) {
      // randomNum is in the loop so that every time it should get diff-diff index values
      // or it should not get the repeated values from the "newArray[randomNum]"
      let randomNum = Math.ceil(Math.random() * 500);
      for (let j = randomNum; j <= randomNum + 120; j++) {
        // newArray[j%500] is because if value is more than 500 eg:-1002 , so it will
        // make that value as [2] and modulus with 500 is because Array length is upto 500.
        str = str + " " + newArray[j % 500];
      }
      str = str + "<br> <br>";
    }
    showPara.innerHTML = str;
  });
  