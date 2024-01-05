import React from "react";

export default function Educacion() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-[310px] md:w-full rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-[#13bcffda] dark:bg-gray-700 dark:text-gray-400 h-[75px] ">
          <tr>
            <th scope="col" class="px-6 py-3">
              Educación
            </th>
            <th scope="col" class="px-6 py-3">
              Institución
            </th>
            <th scope="col" class="px-6 py-3">
              años
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-[#1b1f24] border-b dark:bg-gray-900 dark:border-gray-700 h-24">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
            >
              Educación Universitaria <br /> (Ing de Software)
            </th>
            <td class="px-6 py-4 text-white">IUP Santiago Mariño</td>
            <td class="px-6 py-4 text-white">2021 - actualidad</td>
          </tr>
          <tr class="border-b bg-[#1b1f24] dark:bg-gray-800 dark:border-gray-700 h-24">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
            >
              Educación Secundaria
            </th>
            <td class="px-6 py-4 text-white">UEP Cecilio Acosta IV</td>
            <td class="px-6 py-4 text-white">2016 - 2021</td>
          </tr>
          <tr class="bg-[#1b1f24] border-b dark:bg-gray-900 dark:border-gray-700 h-24">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
            >
              Educación Primaria
            </th>
            <td class="px-6 py-4 text-white">UEP Cecilio Acosta IV</td>
            <td class="px-6 py-4 text-white">2011 - 2016</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
