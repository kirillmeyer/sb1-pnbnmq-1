import React from 'react'

export function CookiePolicy() {
  return (
    <div className="min-h-screen bg-primary pt-24">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto form-card">
          <h1 className="section-title mb-8">Политика использования файлов cookie</h1>
          
          <div className="prose prose-lg">
            <p className="mb-6">
              Этот сайт использует файлы cookie для улучшения работы и предоставления персонализированного опыта. Файлы cookie - это небольшие текстовые файлы, которые сохраняются на вашем устройстве.
            </p>

            <h2 className="text-2xl font-display font-bold text-dark mt-8 mb-4 italic">Какие файлы cookie мы используем</h2>
            <p className="mb-4">
              Мы используем следующие типы файлов cookie:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Необходимые файлы cookie для работы сайта</li>
              <li>Аналитические файлы cookie для анализа использования сайта</li>
              <li>Функциональные файлы cookie для сохранения ваших предпочтений</li>
            </ul>

            <h2 className="text-2xl font-display font-bold text-dark mt-8 mb-4 italic">Управление файлами cookie</h2>
            <p className="mb-4">
              Вы можете управлять использованием файлов cookie в настройках вашего браузера:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=ru" 
                   className="text-dark underline"
                   target="_blank"
                   rel="noopener noreferrer">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/ru/kb/uluchshennaya-zashita-ot-otslezhivaniya-v-firefox-?redirectlocale=en-US&redirectslug=enable-and-disable-cookies-website-preferences"
                   className="text-dark underline"
                   target="_blank"
                   rel="noopener noreferrer">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac"
                   className="text-dark underline"
                   target="_blank"
                   rel="noopener noreferrer">
                  Safari
                </a>
              </li>
            </ul>

            <p className="mb-4">
              Вы также можете отказаться от аналитических cookie здесь:{' '}
              <a href="https://yandex.ru/support/metrika/general/opt-out.html"
                 className="text-dark underline"
                 target="_blank"
                 rel="noopener noreferrer">
                Отказаться от Яндекс.Метрики
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}