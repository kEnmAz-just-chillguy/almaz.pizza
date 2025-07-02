import React from "react";

function Footer() {
  return (
    <div className="">
      <footer class=" mt-16 border-t">
        <div class="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
          <div class="space-y-4">
            <span class="text-lg font-semibold">Раздел 1</span>
            <ul class="space-y-2">
              <li>
                <a href="#" class="hover:underline">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <span class="text-lg font-semibold">Помощь</span>
            <ul class="space-y-2">
              <li>
                <a href="#" class="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Оплата
                </a>
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <span class="text-lg font-semibold">Личный кабинет</span>
            <ul class="space-y-2">
              <li>
                <a href="#" class="hover:underline">
                  Войти
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Регистрация
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Заказы
                </a>
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <span class="text-lg font-semibold">Связаться с нами</span>
            <ul class="space-y-2">
              <li class="flex items-center gap-2">
                <i class="fa-solid fa-phone text-primary"></i>
                <span>+7 (999) 123-45-67</span>
              </li>
              <li class="flex items-center gap-2">
                <i class="fa-solid fa-envelope text-primary"></i>
                <span>info@example.com</span>
              </li>
              <li class="flex gap-4 mt-2">
                <a href="#">
                  <i class="fa-brands fa-instagram text-xl hover:text-primary"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-vk text-xl hover:text-primary"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-telegram text-xl hover:text-primary"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
