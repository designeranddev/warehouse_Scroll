function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    ./image_sequence/1_00007.jpg
    ./image_sequence/1_00008.jpg
    ./image_sequence/1_00009.jpg
    ./image_sequence/1_00010.jpg
    ./image_sequence/1_00011.jpg
    ./image_sequence/1_00012.jpg
    ./image_sequence/1_00013.jpg
    ./image_sequence/1_00014.jpg
    ./image_sequence/1_00015.jpg
    ./image_sequence/1_00016.jpg
    ./image_sequence/1_00017.jpg
    ./image_sequence/1_00018.jpg
    ./image_sequence/1_00019.jpg
    ./image_sequence/1_00020.jpg
    ./image_sequence/1_00021.jpg
    ./image_sequence/1_00022.jpg
    ./image_sequence/1_00023.jpg
    ./image_sequence/1_00024.jpg
    ./image_sequence/1_00025.jpg
    ./image_sequence/1_00026.jpg
    ./image_sequence/1_00027.jpg
    ./image_sequence/1_00028.jpg
    ./image_sequence/1_00029.jpg
    ./image_sequence/1_00030.jpg
    ./image_sequence/1_00031.jpg
    ./image_sequence/1_00032.jpg
    ./image_sequence/1_00033.jpg
    ./image_sequence/1_00034.jpg
    ./image_sequence/1_00035.jpg
    ./image_sequence/1_00036.jpg
    ./image_sequence/1_00037.jpg
    ./image_sequence/1_00038.jpg
    ./image_sequence/1_00039.jpg
    ./image_sequence/1_00040.jpg
    ./image_sequence/1_00041.jpg
    ./image_sequence/1_00042.jpg
    ./image_sequence/1_00043.jpg
    ./image_sequence/1_00044.jpg
    ./image_sequence/1_00045.jpg
    ./image_sequence/1_00046.jpg
    ./image_sequence/1_00047.jpg
    ./image_sequence/1_00048.jpg
    ./image_sequence/1_00049.jpg
    ./image_sequence/1_00050.jpg
    ./image_sequence/1_00051.jpg
    ./image_sequence/1_00052.jpg
    ./image_sequence/1_00053.jpg
    ./image_sequence/1_00054.jpg
    ./image_sequence/1_00055.jpg
    ./image_sequence/1_00056.jpg
    ./image_sequence/1_00057.jpg
    ./image_sequence/1_00058.jpg
    ./image_sequence/1_00059.jpg
    ./image_sequence/1_00060.jpg
    ./image_sequence/1_00061.jpg
    ./image_sequence/1_00062.jpg
    ./image_sequence/1_00063.jpg
    ./image_sequence/1_00064.jpg
    ./image_sequence/1_00065.jpg
    ./image_sequence/1_00066.jpg
    ./image_sequence/1_00067.jpg
    ./image_sequence/1_00068.jpg
    ./image_sequence/1_00069.jpg
    ./image_sequence/1_00070.jpg
    ./image_sequence/1_00071.jpg
    ./image_sequence/1_00072.jpg
    ./image_sequence/1_00073.jpg
    ./image_sequence/1_00074.jpg
    ./image_sequence/1_00075.jpg
    ./image_sequence/1_00076.jpg
    ./image_sequence/1_00078.jpg
    ./image_sequence/1_00079.jpg
    ./image_sequence/1_00080.jpg
    ./image_sequence/1_00081.jpg
    ./image_sequence/1_00082.jpg
    ./image_sequence/1_00083.jpg
    ./image_sequence/1_00084.jpg
    ./image_sequence/1_00085.jpg
    ./image_sequence/1_00086.jpg
    ./image_sequence/1_00087.jpg
    ./image_sequence/1_00088.jpg
    ./image_sequence/1_00089.jpg
    ./image_sequence/1_00090.jpg
    ./image_sequence/1_00091.jpg
    ./image_sequence/1_00092.jpg
    ./image_sequence/1_00093.jpg
    ./image_sequence/1_00094.jpg
    ./image_sequence/1_00095.jpg
    ./image_sequence/1_00096.jpg
    ./image_sequence/1_00097.jpg
    ./image_sequence/1_00098.jpg
    ./image_sequence/1_00099.jpg
    ./image_sequence/1_00100.jpg
    ./image_sequence/1_00101.jpg
    ./image_sequence/1_00102.jpg
    ./image_sequence/1_00103.jpg
    ./image_sequence/1_00104.jpg
    ./image_sequence/1_00105.jpg
    ./image_sequence/1_00106.jpg
    ./image_sequence/1_00107.jpg
    ./image_sequence/1_00108.jpg
    ./image_sequence/1_00109.jpg
    ./image_sequence/1_00110.jpg
    ./image_sequence/1_00111.jpg
    ./image_sequence/1_00112.jpg
    ./image_sequence/1_00113.jpg
    ./image_sequence/1_00114.jpg
    ./image_sequence/1_00115.jpg
    ./image_sequence/1_00116.jpg
    ./image_sequence/1_00117.jpg
    ./image_sequence/1_00118.jpg
    ./image_sequence/1_00119.jpg
    ./image_sequence/1_00120.jpg
    ./image_sequence/1_00121.jpg
    ./image_sequence/1_00122.jpg
    ./image_sequence/1_00123.jpg
    ./image_sequence/1_00124.jpg
    ./image_sequence/1_00125.jpg
    ./image_sequence/1_00126.jpg
    ./image_sequence/1_00127.jpg
    ./image_sequence/1_00128.jpg
    ./image_sequence/1_00129.jpg
    ./image_sequence/1_00130.jpg
    ./image_sequence/1_00131.jpg
    ./image_sequence/1_00132.jpg
    ./image_sequence/1_00133.jpg
    ./image_sequence/1_00134.jpg
    ./image_sequence/1_00135.jpg
    ./image_sequence/1_00136.jpg
    ./image_sequence/1_00137.jpg
    ./image_sequence/1_00138.jpg
    ./image_sequence/1_00139.jpg
    ./image_sequence/1_00140.jpg
    ./image_sequence/1_00141.jpg
    ./image_sequence/1_00142.jpg
    ./image_sequence/1_00143.jpg
    ./image_sequence/1_00144.jpg
    ./image_sequence/1_00145.jpg
    ./image_sequence/1_00146.jpg
    ./image_sequence/1_00147.jpg
    ./image_sequence/1_00148.jpg
    ./image_sequence/1_00149.jpg
    ./image_sequence/1_00150.jpg
    ./image_sequence/1_00151.jpg
    ./image_sequence/1_00152.jpg
    ./image_sequence/1_00153.jpg
    ./image_sequence/1_00154.jpg
    ./image_sequence/1_00155.jpg
    ./image_sequence/1_00156.jpg
    ./image_sequence/1_00157.jpg
    ./image_sequence/1_00158.jpg
    ./image_sequence/1_00159.jpg
    ./image_sequence/1_00160.jpg
    ./image_sequence/1_00161.jpg
    ./image_sequence/1_00162.jpg
    ./image_sequence/1_00163.jpg
    ./image_sequence/1_00164.jpg
    ./image_sequence/1_00165.jpg
    ./image_sequence/1_00166.jpg
    ./image_sequence/1_00167.jpg
    ./image_sequence/1_00168.jpg
    ./image_sequence/1_00169.jpg
    ./image_sequence/1_00170.jpg
    ./image_sequence/1_00171.jpg
    ./image_sequence/1_00172.jpg
    ./image_sequence/1_00173.jpg
    ./image_sequence/1_00174.jpg
    ./image_sequence/1_00175.jpg
    ./image_sequence/1_00176.jpg
    ./image_sequence/1_00178.jpg
    ./image_sequence/1_00179.jpg
    ./image_sequence/1_00180.jpg
    ./image_sequence/1_00181.jpg
    ./image_sequence/1_00182.jpg
    ./image_sequence/1_00183.jpg
    ./image_sequence/1_00184.jpg
    ./image_sequence/1_00185.jpg
    ./image_sequence/1_00186.jpg
    ./image_sequence/1_00187.jpg
    ./image_sequence/1_00188.jpg
    ./image_sequence/1_00189.jpg
    ./image_sequence/1_00190.jpg
    ./image_sequence/1_00191.jpg
    ./image_sequence/1_00192.jpg
    ./image_sequence/1_00193.jpg
    ./image_sequence/1_00194.jpg
    ./image_sequence/1_00195.jpg
    ./image_sequence/1_00196.jpg
    ./image_sequence/1_00197.jpg
    ./image_sequence/1_00198.jpg
    ./image_sequence/1_00199.jpg
    ./image_sequence/1_00200.jpg
    ./image_sequence/1_00201.jpg
    ./image_sequence/1_00202.jpg
    ./image_sequence/1_00203.jpg
    ./image_sequence/1_00204.jpg
    ./image_sequence/1_00205.jpg
    ./image_sequence/1_00206.jpg
    ./image_sequence/1_00207.jpg
    ./image_sequence/1_00208.jpg
    ./image_sequence/1_00209.jpg
    ./image_sequence/1_00210.jpg
    ./image_sequence/1_00211.jpg
    ./image_sequence/1_00212.jpg
    ./image_sequence/1_00213.jpg
    ./image_sequence/1_00214.jpg
    ./image_sequence/1_00215.jpg
    ./image_sequence/1_00216.jpg
    ./image_sequence/1_00217.jpg
    ./image_sequence/1_00218.jpg
    ./image_sequence/1_00219.jpg
    ./image_sequence/1_00220.jpg
    ./image_sequence/1_00221.jpg
    ./image_sequence/1_00222.jpg
    ./image_sequence/1_00223.jpg
    ./image_sequence/1_00224.jpg
    ./image_sequence/1_00225.jpg
    ./image_sequence/1_00226.jpg
    ./image_sequence/1_00227.jpg
    ./image_sequence/1_00228.jpg
    ./image_sequence/1_00229.jpg
    ./image_sequence/1_00230.jpg
    ./image_sequence/1_00231.jpg
    ./image_sequence/1_00232.jpg
    ./image_sequence/1_00233.jpg
    ./image_sequence/1_00234.jpg
    ./image_sequence/1_00235.jpg
    ./image_sequence/1_00236.jpg
    ./image_sequence/1_00237.jpg
    ./image_sequence/1_00238.jpg
    ./image_sequence/1_00239.jpg
    ./image_sequence/1_00240.jpg
    ./image_sequence/1_00241.jpg
    ./image_sequence/1_00242.jpg
    ./image_sequence/1_00243.jpg
    ./image_sequence/1_00244.jpg
    ./image_sequence/1_00245.jpg
    ./image_sequence/1_00246.jpg
    ./image_sequence/1_00247.jpg
    ./image_sequence/1_00248.jpg
    ./image_sequence/1_00249.jpg
    ./image_sequence/1_00250.jpg
    ./image_sequence/1_00251.jpg
    ./image_sequence/1_00252.jpg
    ./image_sequence/1_00253.jpg
    ./image_sequence/1_00254.jpg
    ./image_sequence/1_00255.jpg
    ./image_sequence/1_00256.jpg
    ./image_sequence/1_00257.jpg
    ./image_sequence/1_00258.jpg
    ./image_sequence/1_00259.jpg
    ./image_sequence/1_00260.jpg
    ./image_sequence/1_00261.jpg
    ./image_sequence/1_00262.jpg
    ./image_sequence/1_00263.jpg
    ./image_sequence/1_00264.jpg
    ./image_sequence/1_00265.jpg
    ./image_sequence/1_00266.jpg
    ./image_sequence/1_00267.jpg
    ./image_sequence/1_00268.jpg
    ./image_sequence/1_00269.jpg
    ./image_sequence/1_00270.jpg
    ./image_sequence/1_00271.jpg
    ./image_sequence/1_00272.jpg
    ./image_sequence/1_00273.jpg
    ./image_sequence/1_00274.jpg
    ./image_sequence/1_00275.jpg
    ./image_sequence/1_00276.jpg
    ./image_sequence/1_00278.jpg
    ./image_sequence/1_00279.jpg
    ./image_sequence/1_00280.jpg
    ./image_sequence/1_00281.jpg
    ./image_sequence/1_00282.jpg
    ./image_sequence/1_00283.jpg
    ./image_sequence/1_00284.jpg
    ./image_sequence/1_00285.jpg
    ./image_sequence/1_00286.jpg
    ./image_sequence/1_00287.jpg
    ./image_sequence/1_00288.jpg
    ./image_sequence/1_00289.jpg
    ./image_sequence/1_00290.jpg
    ./image_sequence/1_00291.jpg
    ./image_sequence/1_00292.jpg
    ./image_sequence/1_00293.jpg
    ./image_sequence/1_00294.jpg
    ./image_sequence/1_00295.jpg
    ./image_sequence/1_00296.jpg
    ./image_sequence/1_00297.jpg
    ./image_sequence/1_00298.jpg
    ./image_sequence/1_00299.jpg
    ./image_sequence/1_00300.jpg
    ./image_sequence/1_00301.jpg
    ./image_sequence/1_00302.jpg
    ./image_sequence/1_00303.jpg
    ./image_sequence/1_00304.jpg
    ./image_sequence/1_00305.jpg
    ./image_sequence/1_00306.jpg
    ./image_sequence/1_00307.jpg
    ./image_sequence/1_00308.jpg
    ./image_sequence/1_00309.jpg
    ./image_sequence/1_00310.jpg
    ./image_sequence/1_00311.jpg
    ./image_sequence/1_00312.jpg
    ./image_sequence/1_00313.jpg
    ./image_sequence/1_00314.jpg
    ./image_sequence/1_00315.jpg
    ./image_sequence/1_00316.jpg
    ./image_sequence/1_00317.jpg
    ./image_sequence/1_00318.jpg
    ./image_sequence/1_00319.jpg
    ./image_sequence/1_00320.jpg
    ./image_sequence/1_00321.jpg
    ./image_sequence/1_00322.jpg
    ./image_sequence/1_00323.jpg
    ./image_sequence/1_00324.jpg
    ./image_sequence/1_00325.jpg
    ./image_sequence/1_00326.jpg
    ./image_sequence/1_00327.jpg
    ./image_sequence/1_00328.jpg
    ./image_sequence/1_00329.jpg
    ./image_sequence/1_00330.jpg
    ./image_sequence/1_00331.jpg
    ./image_sequence/1_00332.jpg
    ./image_sequence/1_00333.jpg
    ./image_sequence/1_00334.jpg
    ./image_sequence/1_00335.jpg
    ./image_sequence/1_00336.jpg
    ./image_sequence/1_00337.jpg
    ./image_sequence/1_00338.jpg
    ./image_sequence/1_00339.jpg
    ./image_sequence/1_00340.jpg
    ./image_sequence/1_00341.jpg
    ./image_sequence/1_00342.jpg
    ./image_sequence/1_00343.jpg
    ./image_sequence/1_00344.jpg
    ./image_sequence/1_00345.jpg
    ./image_sequence/1_00346.jpg
    ./image_sequence/1_00347.jpg
    ./image_sequence/1_00348.jpg
    ./image_sequence/1_00349.jpg
    ./image_sequence/1_00350.jpg
    ./image_sequence/1_00351.jpg
    ./image_sequence/1_00352.jpg
    ./image_sequence/1_00353.jpg
    ./image_sequence/1_00354.jpg
    ./image_sequence/1_00355.jpg
    ./image_sequence/1_00356.jpg
    ./image_sequence/1_00357.jpg
    ./image_sequence/1_00358.jpg
    ./image_sequence/1_00359.jpg
    ./image_sequence/1_00360.jpg
    ./image_sequence/1_00361.jpg
    ./image_sequence/1_00362.jpg
    ./image_sequence/1_00363.jpg
    ./image_sequence/1_00364.jpg
    ./image_sequence/1_00365.jpg
    ./image_sequence/1_00366.jpg
    ./image_sequence/1_00367.jpg
    ./image_sequence/1_00368.jpg
    ./image_sequence/1_00369.jpg
    ./image_sequence/1_00370.jpg
    ./image_sequence/1_00371.jpg
    ./image_sequence/1_00372.jpg
    ./image_sequence/1_00373.jpg
    ./image_sequence/1_00374.jpg
    ./image_sequence/1_00375.jpg
    ./image_sequence/1_00376.jpg
    ./image_sequence/1_00378.jpg
    ./image_sequence/1_00379.jpg
    ./image_sequence/1_00380.jpg
    ./image_sequence/1_00381.jpg
    ./image_sequence/1_00382.jpg
    ./image_sequence/1_00383.jpg
    ./image_sequence/1_00384.jpg
    ./image_sequence/1_00385.jpg
    ./image_sequence/1_00386.jpg
    ./image_sequence/1_00387.jpg
    ./image_sequence/1_00388.jpg
    ./image_sequence/1_00389.jpg
    ./image_sequence/1_00390.jpg
    ./image_sequence/1_00391.jpg
    ./image_sequence/1_00392.jpg
    ./image_sequence/1_00393.jpg
    ./image_sequence/1_00394.jpg
    ./image_sequence/1_00395.jpg
    ./image_sequence/1_00396.jpg
    ./image_sequence/1_00397.jpg
    ./image_sequence/1_00398.jpg
    ./image_sequence/1_00399.jpg
    ./image_sequence/1_00400.jpg
    ./image_sequence/1_00401.jpg
    ./image_sequence/1_00402.jpg
    ./image_sequence/1_00403.jpg
    ./image_sequence/1_00404.jpg
    ./image_sequence/1_00405.jpg
    ./image_sequence/1_00406.jpg
    ./image_sequence/1_00407.jpg
    ./image_sequence/1_00408.jpg
    ./image_sequence/1_00409.jpg
    ./image_sequence/1_00410.jpg
    ./image_sequence/1_00411.jpg
    ./image_sequence/1_00412.jpg
    ./image_sequence/1_00413.jpg
    ./image_sequence/1_00414.jpg
    ./image_sequence/1_00415.jpg
    ./image_sequence/1_00416.jpg
    ./image_sequence/1_00417.jpg
    ./image_sequence/1_00418.jpg
    ./image_sequence/1_00419.jpg
    ./image_sequence/1_00420.jpg
    ./image_sequence/1_00421.jpg
    ./image_sequence/1_00422.jpg
    ./image_sequence/1_00423.jpg
    ./image_sequence/1_00424.jpg
    ./image_sequence/1_00425.jpg
    ./image_sequence/1_00426.jpg
    ./image_sequence/1_00427.jpg
    ./image_sequence/1_00428.jpg
    ./image_sequence/1_00429.jpg
    ./image_sequence/1_00430.jpg
    ./image_sequence/1_00431.jpg
    ./image_sequence/1_00432.jpg
    ./image_sequence/1_00433.jpg
    ./image_sequence/1_00434.jpg
    ./image_sequence/1_00435.jpg
    ./image_sequence/1_00436.jpg
    ./image_sequence/1_00437.jpg
    ./image_sequence/1_00438.jpg
    ./image_sequence/1_00439.jpg
    ./image_sequence/1_00440.jpg
    ./image_sequence/1_00441.jpg
    ./image_sequence/1_00442.jpg
    ./image_sequence/1_00443.jpg
    ./image_sequence/1_00444.jpg
    ./image_sequence/1_00445.jpg
    ./image_sequence/1_00446.jpg
    ./image_sequence/1_00447.jpg
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 461;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
})
