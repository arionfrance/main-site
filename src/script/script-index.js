function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
        window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
    }

    obj = document.getElementById("number");
    obj2 = document.getElementById("number2");
    obj3 = document.getElementById("number3");

    animateValue(obj, 0, 13, 2500);
    animateValue(obj2, 0, 25, 2500);  
    animateValue(obj3, 0, 99, 2500);
    

    const ratio = 0.1
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: ratio
      };
      
      const handleIntersect = function (entries, observer) {
        entries.forEach(function(entry) {
            if(entry.intersectionRatio > ratio) {
                entry.target.classList.add('reveal-visible')
                observer.unobserve(entry.target)
            }
        })
      }

      const observer = new IntersectionObserver(handleIntersect, options);
      document.querySelectorAll('.reveal').forEach(function(r) {
        observer.observe(r);
      });