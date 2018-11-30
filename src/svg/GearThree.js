import React from "react";
import "../css/svg/gearThree.css";

function GearThree(props) {
  return (
    <div>
      <svg
        id="gearThreeBot"
        width="247"
        height="246"
        viewBox="0 0 247 246"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="gearThreeMain"
          d="M126.095 56.8012L126.448 61.262C126.768 65.3005 132.482 65.8148 133.517 61.8982L134.662 57.5722C135.166 55.6666 137.998 56.1807 137.8 58.1417L137.352 62.594C136.945 66.6247 142.475 68.1509 144.193 64.4823L146.092 60.43C146.928 58.6451 149.623 59.6567 149.078 61.5509L147.842 65.8515C146.722 69.7448 151.89 72.2338 154.236 68.931L156.828 65.2828C157.969 63.6759 160.44 65.1525 159.566 66.919L157.581 70.9296C155.785 74.5605 160.426 77.9324 163.324 75.1015L166.525 71.9747C167.935 70.5973 170.103 72.4914 168.927 74.0735L166.258 77.6653C163.842 80.917 167.806 85.0634 171.163 82.7955L174.871 80.2904C176.504 79.187 178.299 81.4378 176.86 82.7845L173.593 85.842C170.635 88.6101 173.795 93.3976 177.503 91.7655L181.598 89.9628C183.402 89.1688 184.766 91.7038 183.11 92.7719L179.349 95.1969C175.944 97.3923 178.199 102.667 182.139 101.723L186.49 100.681C188.407 100.222 189.297 102.96 187.476 103.715L183.343 105.429C179.601 106.982 180.877 112.574 184.922 112.349L189.39 112.1C191.358 111.991 191.745 114.844 189.818 115.262L185.445 116.211C181.486 117.07 181.744 122.8 185.764 123.301L190.204 123.854C192.16 124.098 192.031 126.974 190.061 127.041L185.589 127.194C181.54 127.332 180.77 133.017 184.636 134.227L188.907 135.564C190.788 136.153 190.147 138.96 188.197 138.674L183.769 138.026C179.761 137.439 177.988 142.895 181.576 144.777L185.539 146.855C187.284 147.77 186.153 150.417 184.285 149.788L180.044 148.36C176.205 147.067 173.487 152.118 176.681 154.61L180.209 157.362C181.763 158.574 180.177 160.977 178.452 160.024L174.534 157.862C170.988 155.904 167.411 160.389 170.109 163.411L173.089 166.749C174.402 168.22 172.412 170.3 170.885 169.055L167.416 166.228C164.276 163.668 159.956 167.442 162.071 170.897L164.407 174.714C165.436 176.395 163.107 178.087 161.826 176.589L158.919 173.188C156.286 170.109 151.362 173.051 152.826 176.828L154.443 181.001C155.155 182.838 152.561 184.087 151.569 182.385L149.315 178.519C147.274 175.019 141.904 177.035 142.67 181.013L143.516 185.407C143.889 187.342 141.114 188.108 140.441 186.256L138.913 182.049C137.531 178.242 131.886 179.266 131.93 183.317L131.978 187.791C131.999 189.762 129.132 190.02 128.801 188.077L128.049 183.666C127.368 179.673 121.632 179.673 120.951 183.666L120.199 188.077C119.868 190.02 117.001 189.762 117.022 187.791L117.07 183.317C117.114 179.266 111.469 178.242 110.087 182.049L108.559 186.256C107.886 188.108 105.111 187.342 105.484 185.407L106.33 181.013C107.096 177.035 101.726 175.019 99.6852 178.519L97.4314 182.385C96.4386 184.087 93.845 182.838 94.5573 181.001L96.1744 176.828C97.6385 173.051 92.714 170.109 90.0815 173.188L87.1736 176.589C85.8927 178.087 83.5638 176.395 84.5928 174.714L86.929 170.897C89.0439 167.442 84.724 163.668 81.5839 166.228L78.1154 169.055C76.5877 170.3 74.5983 168.219 75.9109 166.749L78.8911 163.411C81.589 160.389 78.0124 155.904 74.4658 157.862L70.5482 160.024C68.8226 160.977 67.2368 158.574 68.7908 157.362L72.3191 154.61C75.5133 152.118 72.795 147.067 68.9557 148.36L64.715 149.788C62.847 150.417 61.7157 147.77 63.4612 146.855L67.4242 144.777C71.012 142.895 69.2394 137.439 65.2309 138.026L60.8033 138.674C58.853 138.96 58.2125 136.153 60.0935 135.564L64.3638 134.227C68.2299 133.017 67.4599 127.332 63.4111 127.194L58.9389 127.041C56.9689 126.974 56.8399 124.098 58.7957 123.854L63.2363 123.301C67.2563 122.8 67.5138 117.07 63.5547 116.211L59.1817 115.262C57.2554 114.844 57.6419 111.991 59.6099 112.1L64.0777 112.349C68.1226 112.574 69.3992 106.982 65.6571 105.429L61.5238 103.715C59.7031 102.96 60.5928 100.222 62.5096 100.681L66.8613 101.723C70.801 102.667 73.0556 97.3924 69.6508 95.1969L65.8901 92.7719C64.2335 91.7037 65.5977 89.1688 67.4017 89.9628L71.4973 91.7655C75.2052 93.3976 78.3654 88.6101 75.4074 85.842L72.1401 82.7845C70.7009 81.4377 72.4958 79.187 74.129 80.2904L77.837 82.7955C81.1938 85.0633 85.1581 80.9171 82.7419 77.6653L80.073 74.0735C78.8974 72.4913 81.0654 70.5974 82.4753 71.9746L85.6764 75.1015C88.5744 77.9323 93.2153 74.5606 91.4185 70.9296L89.4339 66.919C88.5597 65.1524 91.031 63.6759 92.1723 65.2828L94.7636 68.931C97.1096 72.2338 102.278 69.7449 101.158 65.8515L99.9218 61.5509C99.3771 59.6566 102.072 58.6451 102.908 60.43L104.807 64.4823C106.525 68.1508 112.055 66.6248 111.648 62.594L111.2 58.1418C111.002 56.1806 113.834 55.6667 114.338 57.5721L115.483 61.8982C116.518 65.8147 122.232 65.3005 122.552 61.262L122.905 56.8012C123.061 54.8362 125.939 54.8363 126.095 56.8012Z"
          fill="#A4A4A4"
          stroke="black"
          strokeWidth="2"
        />
        <path
          id="gearThreeWasher"
          d="M150.793 123C150.793 137.912 138.705 150 123.793 150C108.882 150 96.7935 137.912 96.7935 123C96.7935 108.088 108.882 96 123.793 96C138.705 96 150.793 108.088 150.793 123Z"
          fill="#757575"
          stroke="black"
          strokeWidth="2"
        />
        <path
          id="gearThreeNut"
          d="M104.009 111.577L123.793 100.155L143.578 111.577V134.423L123.793 145.845L104.009 134.423V111.577Z"
          fill="#959595"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default GearThree;
