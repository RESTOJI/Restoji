import { useEffect } from "react";

function useAutoRefreshOnUpdate() {
  useEffect(() => {
    const interval = setInterval(() => {
      fetch(window.location.href, { cache: "no-store" })
        .then((res) => res.text())
        .then((latestHtml) => {
          const currentHtml = document.documentElement.innerHTML;
          if (!latestHtml.includes(currentHtml.slice(0, 100))) {
            console.log("🔁 New version detected, reloading...");

            // تنبيه للمستخدم قبل التحديث
            const notification = document.createElement("div");
            notification.innerText = "🔄 يتم تحديث الصفحة لإظهار آخر التعديلات...";
            Object.assign(notification.style, {
              position: "fixed",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#222",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: "8px",
              zIndex: 9999,
              fontFamily: "sans-serif",
              fontSize: "14px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            });
            document.body.appendChild(notification);

            // إعادة تحميل الصفحة بعد 3 ثواني
            setTimeout(() => {
              window.location.reload(true);
            }, 3000);
          }
        })
        .catch((err) => console.error("Error checking for update:", err));
    }, 60000);

    return () => clearInterval(interval);
  }, []);
}

export default useAutoRefreshOnUpdate;