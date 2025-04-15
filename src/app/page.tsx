import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-[#93E6EF] p-4">
      {/* 검색 바 */}
      <div className="rounded-3xl bg-[#E0D8D8] p-4 mb-4">
        <div className="flex items-center">
          <div className="mr-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" 
                stroke="#1E1E1E" strokeWidth="2"/>
            </svg>
          </div>
          <span className="text-base">출발, 도착지 검색 및 지도로 위치확인</span>
        </div>
      </div>

      {/* 교통 수단 선택 */}
      <div className="flex justify-between mb-4">
        <div className="bg-white p-2 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 16C4 17.1 4.9 18 6 18C7.1 18 8 17.1 8 16C8 14.9 7.1 14 6 14C4.9 14 4 14.9 4 16ZM6 6C4.9 6 4 6.9 4 8C4 9.1 4.9 10 6 10C7.1 10 8 9.1 8 8C8 6.9 7.1 6 6 6ZM6 10.5C4.9 10.5 4 11.4 4 12.5C4 13.6 4.9 14.5 6 14.5C7.1 14.5 8 13.6 8 12.5C8 11.4 7.1 10.5 6 10.5ZM18 8C19.1 8 20 7.1 20 6C20 4.9 19.1 4 18 4C16.9 4 16 4.9 16 6C16 7.1 16.9 8 18 8ZM14 7C14 8.1 14.9 9 16 9C17.1 9 18 8.1 18 7C18 5.9 17.1 5 16 5C14.9 5 14 5.9 14 7ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" 
              fill="#1D1B20"/>
          </svg>
        </div>

        <div className="flex space-x-3">
          <div className="bg-white p-2 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8 2 4 2.5 4 6V16C4 16.55 4.45 17 5 17H7C7.55 17 8 16.55 8 16V14H16V16C16 16.55 16.45 17 17 17H19C19.55 17 20 16.55 20 16V6C20 2.5 16.42 2 12 2ZM7.5 12C6.67 12 6 11.33 6 10.5C6 9.67 6.67 9 7.5 9C8.33 9 9 9.67 9 10.5C9 11.33 8.33 12 7.5 12ZM16.5 12C15.67 12 15 11.33 15 10.5C15 9.67 15.67 9 16.5 9C17.33 9 18 9.67 18 10.5C18 11.33 17.33 12 16.5 12ZM18 8H6V6H18V8Z" 
                fill="#1D1B20"/>
            </svg>
          </div>
          
          <div className="bg-white p-2 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.85 7H17.14L18.22 10.11H5.77L6.85 7ZM19 17H5V12H19V17Z" 
                fill="#1D1B20"/>
              <path d="M7.5 16C8.32843 16 9 15.3284 9 14.5C9 13.6716 8.32843 13 7.5 13C6.67157 13 6 13.6716 6 14.5C6 15.3284 6.67157 16 7.5 16Z" 
                fill="#1D1B20"/>
              <path d="M16.5 16C17.3284 16 18 15.3284 18 14.5C18 13.6716 17.3284 13 16.5 13C15.6716 13 15 13.6716 15 14.5C15 15.3284 15.6716 16 16.5 16Z" 
                fill="#1D1B20"/>
            </svg>
          </div>
          
          <div className="bg-white p-2 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 11V8H7V11H4ZM4 18V15H7V18H4ZM8 18V15H16V18H8ZM8 11V8H16V11H8ZM17 18V15H20V18H17ZM17 11V8H20V11H17ZM18 3C16.1362 3 14.5714 3.28125 13.25 3.66C12.9107 3.74375 12.5893 3.8275 12.2857 3.91125C11.2321 4.125 10.2679 4.33875 9 4.33875C7.76786 4.33875 6.83036 4.125 5.77679 3.91125C5.47321 3.83625 5.15179 3.7525 4.8125 3.66C4.45536 3.58125 4.07143 3.5 3.67857 3.42V2H2V22H3.67857V20.58C4.07143 20.5 4.45536 20.4188 4.8125 20.34C5.15179 20.2575 5.47321 20.1737 5.77679 20.0887C6.83036 19.875 7.76786 19.6613 9 19.6613C10.2679 19.6613 11.2321 19.875 12.2857 20.0887C12.5893 20.1637 12.9107 20.2475 13.25 20.34C14.5714 20.7188 16.1362 21 18 21V3Z" 
                fill="#1D1B20"/>
            </svg>
          </div>
        </div>

        <div className="bg-white p-2 rounded-full">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 16C4 17.1 4.9 18 6 18C7.1 18 8 17.1 8 16C8 14.9 7.1 14 6 14C4.9 14 4 14.9 4 16ZM4 20V22H20V20H4ZM16 8L18 3H12L14 8H16ZM6 22C4.9 22 4 22.9 4 24H2V4H4V2H22V4H24V24H22C22 22.9 21.1 22 20 22H6ZM22 8H20L22 3H24L22 8ZM2 8H4L2 3H0L2 8ZM14 22C14 20.9 13.1 20 12 20C10.9 20 10 20.9 10 22H14ZM20 16C18.9 16 18 16.9 18 18C18 19.1 18.9 20 20 20C21.1 20 22 19.1 22 18C22 16.9 21.1 16 20 16Z" 
              fill="#1D1B20"/>
          </svg>
        </div>
      </div>

      {/* 타이머 섹션 */}
      <div className="bg-[#D9D9D9] rounded-[31px] p-4 mb-4 shadow-lg">
        <div className="text-7xl">00:00:00</div>
        <div className="flex justify-between">
          <div className="text-4xl">+00:15</div>
          <div className="text-4xl">+00:15</div>
        </div>
        
        <div className="flex mt-2">
          <div className="flex-1 h-2 bg-[#3EC9D3] mr-1"></div>
          <div className="flex-1 h-2 bg-white mr-1"></div>
          <div className="flex-1 h-2 bg-white mr-1"></div>
          <div className="flex-1 h-2 bg-white"></div>
        </div>
      </div>

      {/* 오늘 일정 */}
      <div className="bg-[#D9D9D9] rounded-3xl p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-xl">MM/DD 요일</div>
          <div className="bg-white p-2 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8Z" 
                stroke="#1E1E1E" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        <div className="text-xl">캘린더 탭에서<br />오늘 일정만 간단하게</div>
      </div>

      {/* 출발/도착지 검색 위젯 */}
      <div className="space-y-2">
        <div className="border border-black h-10 rounded-md"></div>
        <div className="border border-black h-10 rounded-md"></div>
        <div className="border border-black h-10 rounded-md"></div>
        <div className="border border-black h-10 rounded-md"></div>
      </div>
    </div>
  );
}
