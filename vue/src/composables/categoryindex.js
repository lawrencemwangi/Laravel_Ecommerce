import { ref } from "vue";
import axios from 'axios';
import { useRouter } from "vue-router";


axios.defaults.baseURL = "http://localhost:8000/api/"

export default function useCategories(){
    const categories = ref([]);
    const category = ref([]);
    const router = useRouter();

    const getCategories = async() => {
        const response = await axios.get("categories");
        categories.value = response.data; 
    };
    
    const storeCategory = async(data) => {
        await axios.post("categories", data);
        await router.push({ name: 'admin/category' });
     };


    return{
        categories,
        getCategories,
        storeCategory,
    }
}