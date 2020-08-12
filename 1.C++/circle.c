#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
float Area(float radius)
{
  return 3.1416f * radius * radius;
}

EMSCRIPTEN_KEEPALIVE
float Circumference(float radius)
{
  return 2 * 3.1416f * radius;
}

