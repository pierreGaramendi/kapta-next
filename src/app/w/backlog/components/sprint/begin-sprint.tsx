export const BeginSprint = () => {
  return (
    <form name="sprint-fields" className="p-4">
      <div>
        <h1>Iniciar sprint</h1>
      </div>
      <div>
        Incidencias que se incluirán en este sprint: <b>1</b> incidencia.
        <p>
          Los campos obligatorios están marcados con un asterisco <span>*</span>
        </p>
        <div>
          <label>
            Nombre del sprint<span>*</span>
          </label>
          <div>
            <div role="presentation">
              <input
                className="mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white"
                type="text"
                maxLength={30}
                name="sprintName"
                required
                defaultValue="Tablero Sprint 2"
              />
            </div>
          </div>
        </div>
        <div>
          <label>
            Duración<span>*</span>
          </label>
          <div>
            <div>
              <select className="text-white pl-2 bg-zinc-600 rounded py-1.5" name="cars" id="cars">
                <option value="volvo">1 semana</option>
                <option value="saab">2 semanas</option>
                <option value="mercedes">3 semanas</option>
                <option value="audi">4 semanas</option>
              </select>
            </div>
          </div>
        </div>
        <div role="presentation">
          <div>
            <label>
              Fecha de inicio<span>*</span>
            </label>
            <div>
              <div role="presentation">
                <input
                  className="mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white"
                  type="datetime-local"
                  role="combobox"
                  aria-label="Fecha de inicio"
                />
              </div>
            </div>
          </div>

          <div>
            <label>
              Fecha de Fin<span>*</span>
            </label>
            <div>
              <div role="presentation">
                <input
                  className="mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white"
                  type="datetime-local"
                  role="combobox"
                  aria-label="Fecha de inicio"
                />
              </div>
            </div>
          </div>
          <div>
            <label>Review of W3Schools:</label>
            <textarea
              className="mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white"
              id="w3review"
              name="w3review"
              rows={4}
            >
              At w3schools.com you will learn how to make a website. They offer free tutorials in all web development
              technologies.
            </textarea>
          </div>
          <div className="flex flex-row my-3">
            <button className="border p-1 px-4 rounded" type="button">
              Cacelar
            </button>
            <button className="bg-indigo-600 ml-3 p-1 px-4 rounded" type="button">
              Begin
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
