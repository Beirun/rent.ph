<script setup lang="ts"></script>
<template>
  <Dialog>
    <form>
      <DialogTrigger as-child>
        <slot />
      </DialogTrigger>
      <DialogContent class="sm:max-w-250 min-h-[70vh] max-h-125 p-0 overflow-hidden">
        <div class="flex w-full- h-full">
          <div class="w-full h-full">
            <div class="h-full w-full bg-[url('/loginformpic.jpeg')] bg-cover"></div>
          </div>
          <div class="flex flex-col items-center h-full w-full py-4">
            <div class="py-8 text-4xl font-bold text-[#4e4e4e] dark:text-[#fafafa]">Login</div>
            <form class="w-full px-8 gap-8 flex flex-col py-8">
              <div class="grid gap-8">
                <div class="grid gap-3">
                  <Label for="email">Email</Label>
                  <Input id="email" name="email" class="py-6" />
                </div>
                <div class="grid gap-3">
                  <Label for="password">Password</Label>
                  <Input id="password" name="password" class="py-6" />
                </div>
              </div>
              <div>
                <button
                  class="-my-2 text-[#fe8e0a] hover:underline hover:brightness-85 cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>
              <div>
                <Button class="w-full py-6 font-semibold">Log In</Button>
              </div>
            </form>
            <!-- <div class="w-full px-8 flex gap-2 items-center">
              <div class="w-full h-[1px] bg-foreground"></div>
              <div>OR</div>
              <div class="w-full h-[1px] bg-foreground"></div>
            </div> -->
            <div class="w-full px-8 flex items-center justify-center gap-1">
              Don't have an account?
              <button class="text-[#fe8e0a] hover:underline hover:brightness-85 cursor-pointer">
                Register Here!
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </form>
  </Dialog>
</template>
