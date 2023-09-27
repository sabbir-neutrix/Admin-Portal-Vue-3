<template>
    <div class="drop-shadow bg-white p-4 md:p-6">
        <div class="flex justify-start items-center gap-3 mb-8">
            <p class="text-xs md:text-sm font-semibold">Home</p>
            <p class="text-xs md:text-sm font-semibold">></p>
            <p class="text-xs md:text-sm font-semibold">Employees</p>
            <p class="text-xs md:text-sm font-semibold">></p>
            <p class="text-xs md:text-sm font-semibold">Add Employee</p>
        </div>
        <form class="border rounded-md p-4">
            <div class="mb-3 md:mb-6">
                <p class="mb-2">Employee Name <span class="text-red-600">*</span></p>
                <input type="text" class="outline-none border w-full p-2 rounded-md"/>
            </div>
            <div class="mb-3 md:mb-6">
                <p class="mb-2">Employee Title <span class="text-red-600">*</span></p>
                <input type="text" class="outline-none border w-full p-2 rounded-md"/>
            </div>
            <div class="mb-3 md:mb-6">
                <p class="mb-2">Short Description <span class="text-red-600">*</span></p>
                <textarea class="outline-none border w-full p-2 rounded-md" rows="7"/>
            </div>
            <div class="mb-3 md:mb-6">
                <p class="mb-2">Long Description <span class="text-red-600">*</span></p>
                <textarea class="outline-none border w-full p-2 rounded-md" rows="7"/>
            </div>
            <!-- <div class="border rounded-md p-4">
                <div class="mb-3 md:mb-6">
                    <p class="mb-2">Upload Image <span class="text-red-600">*</span></p>
                    <input type="file" class="outline-none border w-full p-2 rounded-md"/>
                </div>
                <div class="mb-3 md:mb-6">
                    <p class="mb-2">Upload Icon <span class="text-red-600">*</span></p>
                    <input type="file" class="outline-none border w-full p-2 rounded-md"/>
                </div>
                <div class="">
                    <p class="mb-2">Upload Employee Images (Max Limit: 4) <span class="text-red-600">*</span></p>
                    <input type="file" class="outline-none border w-full p-2 rounded-md" multiple/>
                </div>
            </div> -->
            <button class="bg-slate-400 text-white p-2 w-full rounded-md mt-6">Add Employee</button>
        </form>
    </div>
</template>