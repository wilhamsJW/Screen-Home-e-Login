// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
var options = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    chart: {
      type: "bar",
      height: 250, // make this 250
      sparkline: {
        enabled: true, // make this true
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };
  
  var chart = new ApexCharts(document.querySelector("#apex1"), options);
  chart.render();
  
  // Sidebar Toggle Codes;
  
  var sidebarOpen = false;
  const sidebar = document.getElementById("sidebar");
  const sidebarCloseIcon = document.getElementById("sidebarIcon");
  const closeContent = document.querySelector('.container');
  const navIcon = document.querySelector('.nav_icon');
  const navIconClose = document.querySelector('.nav_icon_close');
  
  var x = screen.width
  console.log('screen.availWidth', screen.availWidth)
  
  function toggleSidebar() {
    console.log('x vv', x)
    if (screen.availWidth < 850) console.log('é 850')
    // Primeiro click para abrir menu mobile
    if (!sidebarOpen) {
      closeContent.style.display = "flex";  // seta o conteído da página para exibir apenas o menu mobile
      navIcon.style.display = "none";      // seta o ícone de menu para none, para que ele suma e apareça o botão fechar
      navIconClose.style.display = "flex"; // seta o botão fechar para inline, para que ele seja exibido
      sidebar.classList.toggle("sidebar_responsive"); // toggle adiciona e remove a classe automática
      sidebarOpen = true; // setando var para lógica 
  
    } // Segundo click para fechar menu mobile 
    else {
      closeContent.style.display = ""; // voltando a página ao normal
      navIcon.style.display = "inline"; // exibindo o botão menu novamente
      navIconClose.style.display = "none"; // escodendo o botão fechar
      sidebar.classList.toggle("sidebar_responsive"); // toggle adiciona e remove a classe automática
      sidebarOpen = false; // setando var para lógica
    }
  
  }
  