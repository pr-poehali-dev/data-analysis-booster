export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/cab3a374-00a3-40c8-997c-4115cda9e772/files/7a084e76-3214-4c1b-84ea-ad07d2fd3f50.jpg"
          alt="Проверка грузовых шин"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Каждая шина проходит визуальный осмотр перед продажей. Только реальный остаток протектора, честное описание состояния и гарантия на установку.
        </p>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-3xl font-bold text-neutral-900">500+</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide">шин в наличии</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-neutral-900">-60%</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide">дешевле новых</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-neutral-900">100%</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide">проверка качества</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-neutral-900">1 день</p>
            <p className="text-sm text-neutral-500 uppercase tracking-wide">доставка по городу</p>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Получить прайс
        </button>
      </div>
    </div>
  );
}