import React from "react";

export default function Educacion() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-[310px] md:w-full rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-[#13bcffda] dark:bg-gray-700 dark:text-gray-400 h-[75px] ">
          <tr>
            <th scope="col" class="px-6 py-3">
              Product name
            </th>
            <th scope="col" class="px-6 py-3">
              Color
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-[#1b1f24] border-b dark:bg-gray-900 dark:border-gray-700 h-24">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4 text-white">Silver</td>
            <td class="px-6 py-4 text-white">Laptop</td>
            <td class="px-6 py-4 text-white">$2999</td>
          </tr>
          <tr class="border-b bg-[#1b1f24] dark:bg-gray-800 dark:border-gray-700 h-24">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td class="px-6 py-4 text-white">White</td>
            <td class="px-6 py-4 text-white">Laptop PC</td>
            <td class="px-6 py-4 text-white">$1999</td>
          </tr>
          <tr class="bg-[#1b1f24] border-b dark:bg-gray-900 dark:border-gray-700 h-24">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td class="px-6 py-4 text-white">Black</td>
            <td class="px-6 py-4 text-white">Accessories</td>
            <td class="px-6 py-4 text-white">$99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
